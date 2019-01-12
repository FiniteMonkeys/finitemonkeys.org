---
path: "/ksptot_on_macos"
date: "2019-01-09"
title: "KSP Trajectory Optimization Tool on macOS"
project: "kerbal space program"
---

1. Download Wine for macOS from
   https://dl.winehq.org/wine-builds/macosx/pool/winehq-staging-4.0-rc5.pkg
   . (Note that if the version changes, look up the correct URL to download at
   https://dl.winehq.org/wine-builds/macosx/download.html
   .)
2. Launch `Wine Staging` from your Applications folder.
3. `brew update && brew install winetricks`
4. `winetricks vcrun2012`
5. Download MATLAB Runtime R2017b (for Windows) from
   http://ssd.mathworks.com/supportfiles/downloads/R2017b/deployment_files/R2017b/installers/win64/MCR_R2017b_win64_installer.exe
   (Note that if the version changes, look up the link at
   https://www.mathworks.com/products/compiler/matlab-runtime.html
   .)
6. `cd ~/Downloads`
7. `wine MCR_R2017b_win64_installer.exe`

> Note: There's currently an problem with the installer and/or Wine where the installer wants administrator rights it doesn't have.
> Issue [46448](https://bugs.winehq.org/show_bug.cgi?id=46448) has been opened at Wine.
