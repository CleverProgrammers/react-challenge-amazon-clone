### 1) Error 1 - Error while installing react-currency-format
```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: amzaon-clone@0.0.0
npm ERR! Found: react@18.2.0
npm ERR! node_modules/react
npm ERR!   react@"^18.2.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^0.14 || ^15.0.0-rc || ^15.0.0 || ^16.0.0-rc || ^16.0.0 || ^17.0.0" from react-currency-format@1.1.0       
npm ERR! node_modules/react-currency-format
npm ERR!   react-currency-format@"*" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR! 
npm ERR! See C:\Users\zubai\AppData\Local\npm-cache\eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\zubai\AppData\Local\npm-cache\_logs\2022-10-19T10_37_32_428Z-debug-0.log

```

**Solution:** Using force (`npm install react-currency-format --save --force`)


### 2) Error 2 - firebase was not installing and giving errors

**Solution:** 
```
Step 1: npm install -g firebase-tools
Step 2: npm install --save firebase --force (used force otherwise it was not working)
Step 3: Use these imports instead of just (import firebase from 'firebase') while using version 9 
	import firebase from 'firebase/compat/app';
	import 'firebase/compat/auth';
	import 'firebase/compat/firestore';
```


### 3) Error 3 - (firebase login) command was giving error
```
cannot be loaded because running scripts is disabled on this     system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170. 
At line:1 char:1 
+ firebase login + ~~~~~~~~     + CategoryInfo          
: SecurityError: (:) [], PSSecurityException     
+ FullyQualifiedErrorId : UnauthorizedAccess
```

**Solution:** 
```
Step 1: open windows powershell as an administrator
Step 2: Run this command (Set-ExecutionPolicy -ExecutionPolicy RemoteSigned)
```


### 4) Error 4 - My React Website was not being deployed into firebase.. It was first showing Welcome firebase page and after that it was just showing blank page and was giving 404 Error

**Solution:** I don't know the exact reason of the issue (Page was blank and was giving 404 Error) but somehow, I solved it. The reason of this issue could be (according to my assumptions):
1) By running command (npm run build) just before (firebase deploy command)
2) Setting public directory option to public or build instead of using dist
3) Setting (Configure as a single-page app (rewrite all urls to /index.html)? No)
4) Setting (File dist/index.html already exists. Overwrite? Yes)

The steps that I followed to **solve this issue** are:
```
Pre-requisite: 1) delete .firebase folder 2) copy your project's index.html file content/code and replace it with the build folder's index.html file content because these two files should have same content/code
Step 0): npm run build (For React App)
Step 1): npm install -g firebase-tools
Step 2): firebase login (If you are already login, then there is no need for this step)
Step 3): firebase init
Step 4): Are you ready to proceed? Yes
Step 5):  What do you want to use as your public directory? dist
Step 6): Configure as a single-page app (rewrite all urls to /index.html)? Yes
Step 7): Set up automatic builds and deploys with GitHub? No
Step 8): File dist/index.html already exists. Overwrite? No
Step 9): firebase deploy
```


### 5) Error 5 - Stripe library was not installing due to ERESOLVE error (it happens due to conflict of dependencies means some dependencies depends on certain react version)

**Solution:** 
Run this command first before installing Stripe (`npm config set legacy-peer-deps true`)

### 6) Error 6 - Could not find Elements context; You need to wrap the part of your app that calls useStripe() in an <Elements> provider

**Solution:** 

```
element={[<Header />, 
            <Elements stripe={promise} >		// I wrapped the Payment component inside Elements component
               <Payment /> 
            </Elements> ]}/>
```



### 7) Error 7: - Cors Policy Error

**Solution:** There are multiple reasons for this error. The main reason is when there is no communication b/w frontend and backend bcz both frontend and backend are at different ports but are unable to communicate. That's why we install cors module to resovle this issue.
I had written some code for payment procedure using stripe in backend, that's why it was unable to communicate. In fullstack project, a little error or some mistake which is not visible or shown by compiler can cause Cors error.
I **solved this error** using two steps:

```
Step 1) I revisit the code and made it right.
Step 2) I re-run the emulator by using this command (firebase emulators:start) and copied its api URL and paste into the base URL present in the axios file
```

### 8) Error 8: - (App was not being deployed) Error: functions predeploy error: Command terminated with non-zero exit code 1

**Solution:** 
```
Make sure you are in functions directory (you can change directory by writting this command - cd functions)
Step 0) You can remove everything under "predeploy" in firebase.json, and it'll stop running the script which is causing issues.
		
** Steps for Deploying Website
Step 1) Go to firebase website and Change the firbase billing plans from Spark to Blaze (Its free! Just put your card credientials)
Step 2) Now run this command to deploy backend - (firebase deploy --only functions) in VSCode terminal
Step 3) Go to firebase website and Go to functions tab and copy the api link and paste into the baseURL present in the axios file
Step 4) Run this command to move back to frontend project directory - (cd ..)
Step 5) Run this command to build the frontend: (npm run build)
Step 6) Run command - (firebase deploy --only hosting) in VSCode terminal
** Make sure use --only for functions and hosting otherwise whole app will deployed **
```
