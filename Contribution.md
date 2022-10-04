
# How to contribute

Fork the repo first, clone it and add your changes, push that to your forked repo and raise a PR.
You can check out Getting-Started.md for instructions on how to setup.


- Look in the package.json , if you are having the dependency installed already, if not install your dependency.

- Then look for the folder names matching your component type. 

For example, you want to add a button, then search for Buttons folder and then inside that create a folder with the naming convention as 'your-name'. Inside this folder create your component files and give a name that doesnt clash with other files.
Put your styling files inside this folder along with your component file.

- After you are done with your component, you can add that to the main file of that component i.e in the Buttons.js file. and similarly this works for other components as well.

- If the component you want to add doesnt have a parent folder, then feel free to create yourself while maintaining the structure. After creating a parent folder for the new component, you need to add a route in the App.js and also in the navbar in core-components/Navbar

