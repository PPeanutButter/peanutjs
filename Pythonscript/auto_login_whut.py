# coding=<utf-8>
import requests
import re
import socket
import base64
import psutil
import pywifi
from pywifi import const
import subprocess
import os
import time


def encrypt(password):
    password = base64.b64encode(password.encode('utf-8'))
    return password.decode('utf-8')


class AutoWHUT():
    def getNetIfAddr(self):
        dic = psutil.net_if_addrs()
        mac = ''
        for adapter in dic:
            print(adapter)
            if adapter != 'wls1':
                continue
            snicList = dic[adapter]
            mac = ''
            ipv4 = ''
            ipv6 = ''
            for snic in snicList:
                if snic.family.name in {'AF_LINK', 'AF_PACKET'}:
                    mac = snic.address
                elif snic.family.name == 'AF_INET':
                    ipv4 = snic.address
                elif snic.family.name == 'AF_INET6':
                    ipv6 = snic.address
            print('%s, %s, %s, %s' % (adapter, mac, ipv4, ipv6))
        return mac

    def get_mac_address(self):
        return self.getNetIfAddr().lower()

    def get_host_ip(self):
        try:
            s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
            s.connect(('8.8.8.8', 80))
            ip = s.getsockname()[0]
        finally:
            s.close()

        return ip

    def get_param(self, username: str, password: str, cookies: str):
        header = {
            'Origin': 'http://172.30.16.34',
            'Referer': 'http://172.30.16.34/srun_portal_pc.php?ac_id=1&cmd=login&switchip=172.30.14.104&mac=84:ef:18:91:e5:5b&ip='+self.get_host_ip()+'&essid=WHUT-WLAN6&apname=JB-JH-J4-0901-E&apgroup=WHUT-WLAN-Dual&url=http://www.gstatic.com/generate_204',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18362',
            'Accept': '*/*',
            'Accept-Language': 'zh-CN',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest',
            'Accept-Encoding': 'gzip, deflate',
            'Host': '172.30.16.34',
            'Connection': 'Keep-Alive',
            'Pragma': 'no-cache',
            'Cookie': cookies
        }

        data = 'action=login&username=&password=&ac_id=64&user_ip=&nas_ip=&user_mac=&save_me=1&ajax=1'
        data = re.sub("username=.*?&", "username=" + username + '&', data)
        data = re.sub("password=.*?&", "password={B}" + self.encrypt(password) + '&', data)
        data = re.sub("user_ip=.*?&", "user_ip=" + self.get_host_ip() + '&', data)
        data = re.sub("user_mac=.*?&", "user_mac=" + self.get_mac_address() + '&', data)
        return header, data

    def sign_in(self):
        try:
            username = '305290'
            password = 'EcoR1GAATTC'
            cookies = 'login=bQ0pOyR6IXU7PJaQQqRAcBPxGAvxAcrvEe0UJsVvdkTHxMBomR2HUS3oxriFtDiSt7XrDS%2BmurcIcGKHmgRZbb8fUGzw%2FUGvJFIjk0nAVIEwPGYVt7br7b5u1t4sMp%2BAfr4VZ5VcKPDr8eaBrOt2YRrH9Bdy6bogpY89dPj%2BzwrVuc4xmFUoWD8peECGHshewZRrIVvucbx652F2TRxF3VtHNL9H0fs5GjjmJjQMtecd; NSC_tsvo_4l_TH=ffffffffaf160e3a45525d5f4f58455e445a4a423660; login=bQ0pOyR6IXU7PJaQQqRAcBPxGAvxAcrvEe0UJsVvdkTHxMBomR2HUS3oxriFtDiSt7XrDS%2BmurcIcGKHmgRZbb8fUGzw%2FUGvJFIjk0nAVIEwPGYVt7br7b5u1t4sMp%2BAfr4VZ5VcKPDr8eaBrOt2YRrH9Bdy6bogpY89dPj%2BzwrVuc4xmFUoWD8peECGHshewZRrIVvucbx652F2TRxF3VtHNL9H0fs5GjjmJjQMtecd'
            header, data = self.get_param(username, password, cookies)
            print(data)

            result = requests.post('http://172.30.16.34/include/auth_action.php', headers=header, data=data)

            print(result.text, '\n{}\n'.format('*' * 79), result.encoding)
        except BaseException as arg:
            print(arg)


class WifiManager():
    def __init__(self):
        self.wifi = pywifi.PyWiFi()
        self.ifaces = self.wifi.interfaces()[1]
        self.autoWHUT = AutoWHUT()
        self.sleepTime = 1

    def is_connected_wifi(self):
        return self.ifaces.status() == const.IFACE_CONNECTED

    def get_current_wifi(self):
        cmd = 'netsh wlan show interfaces'
        p = subprocess.Popen(cmd,
                             stdin=subprocess.PIPE,
                             stdout=subprocess.PIPE,
                             stderr=subprocess.PIPE,
                             shell=True)
        ret = p.stdout.read()
        ret = ret.decode('gbk')
        index = ret.find("SSID")
        if index > 0:
            return ret[index:].split(':')[1].split('\r\n')[0].strip()
        else:
            return None

    def check_net(self, ip='www.baidu.com'):
        try:
            result = requests.post('http://www.baidu.com')
            return result.text.find("?cmd=redirect") == -1
        except Exception:
            return False
        

    def auto_check(self):
        if self.is_connected_wifi():
            if not self.check_net():
                self.autoWHUT.sign_in()
                print("2s")
                self.sleepTime = 2
            else:
                self.sleepTime = 60
                print("60s")
        else:
            self.sleepTime = 4
            print("no wifi")

    def start(self):
        while True:
            self.auto_check()
            time.sleep(self.sleepTime)


if __name__ == '__main__':
    wifiManager = WifiManager()
    wifiManager.start()






