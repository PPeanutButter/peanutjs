add-type -AssemblyName System.Drawing
# New-Item "E:\Spotlight" -ItemType directory -Force;
foreach($file in (Get-Item "$($env:LOCALAPPDATA)\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\LocalState\Assets\*")){
    if ((Get-Item $file).length -ge 100kb){
    	$image = New-Object -comObject WIA.ImageFile;
	    $image.LoadFile($file.FullName);
	    if($image.Width.ToString() -ge "1920"){
	    	if(-not (Test-Path "$($env:USERPROFILE)\Pictures\$($file.Name).jpg")){
	    		Copy-Item $file.FullName "$($env:USERPROFILE)\Pictures\$($file.Name).jpg";
	    		Write-Host "$($env:USERPROFILE)\Pictures\$($file.Name).jpg";
	    	}else{
	    		Write-Host "Skip! $($env:USERPROFILE)\Pictures\$($file.Name).jpg";
	    	}
	    }
    }
}