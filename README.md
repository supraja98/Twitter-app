# Twitter-app

Native Base Setup  for CRNA Apps

NativeBase is a free and open source UI component library for React Native

1.	If you have a project already, then go to that directory. Else follow this

	npm install -g create-react-native-app

	create-react-native-app twitter_app

	cd YourProjectName



2.	Install NativeBase 

	npm install native-base --save


3.	Install @expo/vector-icons

	npm install @expo/vector-icons --save	


4.	CD into the new project directory

	cd YourProjectName


5.	Start the development server locally

	npm start

Run your sample App in Expo 

Now open your editor and edit App.js to do changes in the UI

For Native Base Setup  for ‘Build with Native Apps

1.	Create React Native project

react-native init YourProjectName

cd YourProjectName

2.	Install NativeBase

npm install native-base --save

3.	Install Peer Dependencies

The peer dependencies included from any npm packages does not automatically get installed. Your application will not depend on it explicitly.

react-native link


Running your React Native application --

1.	Install the Expo client app on your iOS or Android phone 

a.	https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en

b.	https://itunes.apple.com/us/app/expo-client/id982107779?mt=8

2.	Using the Expo app, scan the QR code from your terminal to open your project.

Running on Physical Device :

1.On Android :

Enable Debugging over USB: 

enable the "Developer options" menu by going to Settings → About phone and then tapping the Build number row at the bottom seven times. You can then go back to Settings → Developer options to enable "USB debugging".

Plug in your device via USB:
Check by typing which shows connected device
$ adb devices
List of devices attached
Run your app
$ react-native run-android


For Quick Run of you react-native code without doing any setup.

      We can run any react-native code on following site’s  without any setup on local system. This will aid in quick testing  of code or component.
1. On snack site   : https://snack.expo.io/
2. On dabbot site : http://dabbott.github.io/react-native-web-player/
