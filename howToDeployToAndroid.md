HOW TO DEPLOY TO ANDROID?

1. Install JAVA
´´´bash
sudo apt-get install openjdk-7-jdk
´´´
2. Install Ant
´´´bash
sudo apt-get install ant
´´´
2. Install ANDROID SDK MANAGER
´´´bash
cd /path/to/install/android
wget http://dl.google.com/android/android-sdk_r23.0.2-linux.tgz
tar xvzf android-sdk_r23.0.2-linux.tgz
cd android-sdk-linux
pwd
# create variable ANDROID_HOME from $(pwd) result 
export FOOTPUB=$(pwd)
ls -l
./tools/android
# Download Requirements:
# download Android SDK Tools
# download Android SDK Platform-tools
# download any Android SDK Build-tools
# download any Android SDK Platform (eg API 19)
# Now add android path to $PATH
export PATH=$(PATH):$(ANDROID_HOME)/tools:$(ANDROID_HOME)/platform-tools
cd /path/to/project
# If using cordova cli
cordova build android
cordova run android
# If using phonegap cli
phonegap local build android
phonegap local build android
´´´
Get fun :)
