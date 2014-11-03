HOW TO DEPLOY TO ANDROID?
=========================

# Install JAVA
For Ubuntu
```bash
sudo apt-get install openjdk-7-jdk
```

# Install Ant
For Ubuntu
```bash
sudo apt-get install ant
```

# Install ANDROID SDK MANAGER

```bash
cd /path/to/install/android
wget http://dl.google.com/android/android-sdk_r23.0.2-linux.tgz
tar xvzf android-sdk_r23.0.2-linux.tgz
cd android-sdk-linux
pwd
```

Create variable ANDROID_HOME from $(pwd) result 

```
export ANDROID_HOME=$(pwd)
ls -l
./tools/android
```

If this shows an error message, use: ```sudo mount -o remount,exec /tmp```
otherwise, it opens a small window. 

Select the following required elements and click install, then accept terms:
* Android SDK Tools. This is already installed but could request an update.
* Android SDK Platform-tools. 
* Any Android SDK Build-tools.
* Any Android SDK Platform (e.g. API 19). This should be the same for "android-targetSdkVersion" preference (see www/config.xml).

Now add android path to $PATH

```
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
cd /path/to/project
```

If using cordova cli

```
cordova build android
cordova run android
```

Or, if using phonegap cli

```
phonegap local build android
phonegap local build android
```

Do NOT forget to check preferences in www/config.xml

http://docs.build.phonegap.com/en_US/3.3.0/configuring_preferences.md.html#_android_only

Have fun :)
