# mobile

To run this project locally on your machine (MacOS), follow the steps bellow:

Use Home Brew to manage packages. More info: https://brew.sh/index_pt-br

- $ `brew install node`
- $ `brew install watchman`

## Xcode
The easiest way to install Xcode is via the Mac App Store. Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.

If you have already installed Xcode on your system, make sure it is version 10 or newer.

Command Line Tools
You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

## CocoaPods
CocoaPods is built with Ruby and it will be installable with the default Ruby available on macOS.
Using the default Ruby available on macOS will require you to use sudo when installing gems. (This is only an issue for the duration of the gem installation, though.)

- $ `sudo gem install cocoapods`

** Note for M1 Mac users **

Mac M1 architecture is not directly compatible with Cocoapods. If you encounter issues when installing pods, you can solve it by running:

- $ `sudo arch -x86_64 gem install ffi`<br/>
- $ `arch -x86_64 pod install`<br/>
These commands install the ffi package, to load dynamically-linked libraries and let you run the pod install properly, and runs pod install with the proper architecture.


# Starting project
Clone the project using your favorite method and navigate to the project's folder. After that, follow these steps:

We recommend the Yarn

- $ `yarn install`
- $ `npx react-native start`
- $ `npx react-native run-ios`

In case of failing, try to open the iOS emulator first and then run $ `npx react-native run-ios` again
