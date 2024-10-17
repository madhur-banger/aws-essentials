# **Introduction: Build a Full Stack React Application**

**Follow step-by-step instructions to create a simple full-stack web application**

## **Overview**

In this tutorial, you will learn how to create a simple full-stack web application using AWS Amplify. Amplify offers a Git-based CI/CD workflow for building, deploying, and hosting single-page web applications or static sites with serverless backends.

## **What you will accomplish**

In this tutorial, you will:

- Build and host a React application on AWS
- Use Amplify to add authentication, data & storage solutions to the app
- Start a cloud sandbox environment that provides an isolated development space to rapidly build, test, and iterate on a fullstack app
- Implement the frontend code to enable users to create, update, and delete notes

## **Prerequisites**

Before starting this tutorial, verify that you have the following prerequisites completed:

- **An AWS account**: if you don't already have one follow the [**Setup Your Environment**](https://aws.amazon.com/getting-started/guides/setup-environment/) tutorial.
- Your AWS profile [**configured**](https://docs.amplify.aws/react/start/account-setup/) for local development.
- **Installed** on your environment: [**Nodejs](https://nodejs.org/en/download)** and [**npm**](https://www.npmjs.com/).
- **Familiarity** with git and a [**GitHub**](https://github.com/) account.

## **Tasks**

This tutorial is divided into four tasks. You must complete each task in order before moving to the next one.

1. [Deploy and Host a React App](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/) (10 minutes): Create a React app, then deploy and host it using AWS Amplify.
2. [Initialize the Amplify Backend](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-two/) (10 minutes): Initialize a cloud backend that include authentication, a database, and storage.
3. [Connect the App to the Cloud backend](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-three/) (10 minutes): Implement the frontend code to connect to the authorization, data and storage backend enabling users to create, update, and delete notes.
4. [Clean up Resources](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-four/) (2 minutes): Clean up the resources used in this tutorial.

# **Task 1: Deploy and Host a React App**

**In this task, you will create a React application and deploy it to the cloud using the AWS Amplify web hosting service.**

## **Overview**

AWS Amplify offers a Git-based CI/CD workflow for building, deploying, and hosting single-page web applications or static sites with serverless backends. When connected to a Git repository, Amplify determines the build settings for both the frontend framework and any configured serverless backend resources, and automatically deploys updates with every code commit.

In this task, you will start by creating a new React application and pushing it to a GitHub repository. Then, connect the repository to AWS Amplify web hosting and deploy it to a globally available content delivery network (CDN) hosted on an *amplifyapp.com* domain. Finally, you will demonstrate continuous deployment capabilities by making changes to the React application, pushing a new version to the main branch, and observing how it automatically invokes a new deployment.

## **What you will accomplish**

- Create a React application
- Initialize a GitHub repository
- Deploy your app with AWS Amplify
- Implement code changes and redeploy your app

## **Implementation**

## Step 1 - Create React App

- 1. In a new terminal window, **run** the following command to use Vite to create a React application:
    
    `npm create vite@latest notesapp -- --template react
    cd notesapp
    npm install
    npm run dev`
    Copy
    
    
    
    2. In the terminal window, select and open the **Local link** to view the Vite + React application.
    
    
    

## Step 2 - Initialise Github Rep

In this step, you will create a GitHub repository and commit your code to the repository. You will need a GitHub account to complete this step, if you do not have an account, [sign up here](https://github.com/).

**Note:** If you have never used GitHub on your computer, follow [the steps](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) to generate and add an SSH key to your account before continuing to allow connection to your account.

1. **Sign in** to GitHub at https://github.com/.



2. In the **Start a new repository** section, make the following selections:

- For **Repository name**, enter **notesapp**, and choose the **Public** radio button.
- Then select, **Create a new repository**.



3. **Open** a new terminal window, **navigate** to your app's root folder (*notesapp*), and **run** the following commands to initialize a git and push the application to the new GitHub repo:

**Note:** Replace the **SSH GitHub URL** in the command with your SSH GitHub URL.

`git init
git add .
git commit -m "first commit"
git remote add origin git@github.com:<your-username>/notesapp.git 
git branch -M main

git push -u origin main`

## Step 3 - Download Amplify Package

- 1. **Open** a new terminal window, **navigate** to your app's root folder (*notesapp*), and **run** the following command:
    
    `npm create amplify@latest -y`Copy
    

    
    2. Running the previous command will scaffold a lightweight Amplify project in the app’s directory.
    
  
    3. In your open terminal window, **run** the following commands to push the changes to GitHub:
    
    `git add .
    git commit -m 'installing amplify'
    git push origin main`
    Copy
    


## Step 4 - Deploy App on Amplify

- In this step, you will connect the GitHub repository you just created to AWS Amplify. This will enable you to build, deploy, and host your app on AWS.
    
    1. **Sign in** to the AWS Management console in a new browser window, and **open** the AWS Amplify console at https://console.aws.amazon.com/amplify/apps.
    
    2. Choose **Create new app.**
    

    
    3. On the **Start building with Amplify** page, for **Deploy your app**, select **GitHub**, and select **Next**.
    

    
    4. When prompted, **authenticate** with GitHub. You will be automatically redirected back to the Amplify console. Choose the **repository** and **main branch** you created earlier. Then, select **Next**.
    

    
    5. Leave the default **build settings** and select **Next**.
    

    
    6. Review the inputs selected, and choose **Save and deploy**.
    

    
    AWS Amplify will now build your source code and deploy your app at *https://...amplifyapp.com*, and on every git push your deployment instance will update. It may take up to 5 minutes to deploy your app.
    
    7. Once the build completes, select the **Visit deployed URL** button to see your web app up and running live.


## Step 5 - Automatically Deploy Code Changes

- In this step, you will make some changes to the code using your text editor and push the changes to the main branch of your app.
    
    1. On your local machine, navigate to the ***notesapp/src/App.jsx*** file, and **update** it with the following code. Then, **save** the file.
    
    ```jsx
    import reactLogo from "./assets/react.svg";
    import "./App.css";
    
    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={reactLogo} className="logo react" alt="React logo" />
    
            <h1>Hello from Amplify</h1>
          </header>
        </div>
      );
    }
    
    export default App;
    
    ```

    
    2. In your terminal window, **run** the following command to push the changes to GitHub:
    
    `git add .
    git commit -m 'changes for amplify'
    git push origin main`

    3. AWS Amplify will now **build** your source code and **deploy** your app.
    

    
    4. Navigate back to the Amplify console, and select the **Visit deployed URL** button to view your updated app.
    
 
    

# **Task 2: Initialize a Local Amplify App**

**In this task, you will use AWS Amplify to provision a cloud backend for the app.**

## **Overview**

Now that you have a React web app, you will use AWS Amplify to configure a cloud backend for the app. AWS Amplify Gen 2 uses a fullstack TypeScript developer experience (DX) for defining backends. Amplify offers a unified developer experience with hosting, backend, and UI-building capabilities and a code-first approach.

## **What you will accomplish**

- Set up Amplify Auth
- Set up Amplify Data
- Set up Amplify Storage

## **Implementation**

## Step 1 - Set Up Amplify Auth

The app uses email as the default login mechanism. When the users sign up, they receive a verification email.

1. By default, your auth resource is configured as shown inside the ***notesapp/amplify/auth/resource.ts*** file. For this tutorial, **keep** the default auth set up as is.


## Step 2 - Set Up Amplify Data

- The app you will be building is a Notes app that will allow users to create, delete, and list notes. This example app will help you learn how to build many popular types of CRUD+L (create, read, update, delete, and list) applications.
    
    1. On your local machine, navigate to the ***notesapp/amplify/data/resource.ts*** file and **update** it with the following code. Then, **save** the file.
    
    - The following updated code uses a per-owner authorization rule ***allow.owner()*** to restrict the note record’s access to the owner of the record.
    - Amplify will automatically add an ***owner: a.string()*** field to each note which contains the note owner's identity information upon record creation.
    
    `import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
    
    const schema = a.schema({
      Note: a
        .model({
          name:a.string(),
          description: a.string(),
          image: a.string(),
        })
        .authorization((allow) => [allow.owner()]),
    });
    
    export type Schema = ClientSchema<typeof schema>;
    
    export const data = defineData({
      schema,
      authorizationModes: {
        defaultAuthorizationMode: 'userPool',
      },
    });`
    

## Step 3 - Set Up Amplify Storage

1. On your local machine, navigate to the ***notesapp/amplify*** folder, and **create** a new folder named ***storage***, and then **create** a file named ***resource.ts*** inside of the new storage folder.


2. Update the ***amplify/storage/resource.ts*** file with the following code to configure a storage resource for your app. Then, **save** the file.

- The updated code will set up the access so that only the person who uploads the image can access. The code will use the ***entity_id*** as a reserved token that will be replaced with the users' identifier when the file is being uploaded.

`import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplifyNotesDrive",
  access: (allow) => ({
    "media/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
  }),
});`

## Step 4 - Deploy Amplify Cloud SandBox

1. On your local machine, navigate to the ***amplify/backend.ts*** file, and **update** it with the following code. Then, **save** the file.

- The following code will import the auth, data, and storage backend definitions:

`import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
defineBackend({
  auth,
  data,
  storage
});`Copy


2. To start your own personal cloud sandbox environment that provides an isolated development space, in a new terminal window, **run** the following command in your apps root folder:

```bash
npx ampx sandbox
```

Copy

- The sandbox allows you to rapidly build, test, and iterate on a fullstack app. Each developer on your team can use their own disposable sandbox environment connected to cloud resources. You can learn more about it [here](https://docs.amplify.aws/react/deploy-and-host/sandbox-environments/).

3. Once the cloud sandbox has been fully deployed, your terminal will display a confirmation message and the ***amplify_outputs.json*** file will be generated and added to your project.


# **Task 3: Build the Frontend**

**In this task, you will create an app frontend and connect it to the cloud backend you have already built.**

## **Overview**

You will learn how to use the Amplify UI component library to scaffold out an entire user authentication flow, allowing users to sign up, sign in, and reset their password with just few lines of code. Additionally, you will build an app frontend that allows users to create, update, and delete their notes. They will also be able to upload an image and associate it with a note.

## **What you will accomplish**

- Install Amplify libraries
- Configure your React app to include authentication, data, and storage for the Notes feature

## **Implementation**

## Step 1 - Install The Amplify Libraries

- You will need two Amplify libraries for your project. The main **aws-amplify library** contains all of the client-side APIs for connecting your app's frontend to your backend and the **@aws-amplify/ui-react** library contains framework-specific UI components.
    
    1. **Open** a new terminal window, **navigate** to you projects folder (*notesapp*), and **run** the following command to install these libraries in the root of the project.
    
    `npm install aws-amplify @aws-amplify/ui-react` Copy

    

## Step 2 - Style the App UI

1. On your local machine, navigate to the ***notesapp/src/index.css*** file, and **update** it with the following code to set the style of the Notes UI. Then, **save** the file.

```css
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color: rgba(255, 255, 255, 0.87);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

.box:nth-child(3n + 1) {
  grid-column: 1;
}
.box:nth-child(3n + 2) {
  grid-column: 2;
}
.box:nth-child(3n + 3) {
  grid-column: 3;
}
```

Copy

## Step 3 - Implement the UI flow for Notes Features

In this step, you will update the **src/App.jsx** to configure the Amplify library with the client configuration file (*amplify_outputs.json*). Then, it will generate a data client using the *generateClient()* function.

The code uses the Amplify Authenticator component to scaffold out an entire user authentication flow allowing users to sign up, sign in, reset their password, and confirm sign-in for multifactor authentication (MFA).

Additionally, the code contains the following:

- **fetchNotes** - Use the data client to list the items in the Notes model.
- **createNote** - Get the data from the form and use the data client to create a new note if the user selects an image. Then, the function will upload this image to Amplify storage and associate it with the new note.
- **deleteNote** - Use the data client to delete the selected note.

1. On your local machine, navigate to the ***notesapp/src/App.jsx*** file, and **update** it with the following code.

```jsx
import { useState, useEffect } from "react";
import {
  Authenticator,
  Button,
  Text,
  TextField,
  Heading,
  Flex,
  View,
  Image,
  Grid,
  Divider,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { getUrl } from "aws-amplify/storage";
import { uploadData } from "aws-amplify/storage";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";
/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

export default function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const { data: notes } = await client.models.Note.list();
    await Promise.all(
      notes.map(async (note) => {
        if (note.image) {
          const linkToStorageFile = await getUrl({
            path: ({ identityId }) => `media/${identityId}/${note.image}`,
          });
          console.log(linkToStorageFile.url);
          note.image = linkToStorageFile.url;
        }
        return note;
      })
    );
    console.log(notes);
    setNotes(notes);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    console.log(form.get("image").name);

    const { data: newNote } = await client.models.Note.create({
      name: form.get("name"),
      description: form.get("description"),
      image: form.get("image").name,
    });

    console.log(newNote);
    if (newNote.image)
      if (newNote.image)
        await uploadData({
          path: ({ identityId }) => `media/${identityId}/${newNote.image}`,

          data: form.get("image"),
        }).result;

    fetchNotes();
    event.target.reset();
  }

  async function deleteNote({ id }) {
    const toBeDeletedNote = {
      id: id,
    };

    const { data: deletedNote } = await client.models.Note.delete(
      toBeDeletedNote
    );
    console.log(deletedNote);

    fetchNotes();
  }

  return (
    <Authenticator>
      {({ signOut }) => (
        <Flex
          className="App"
          justifyContent="center"
          alignItems="center"
          direction="column"
          width="70%"
          margin="0 auto"
        >
          <Heading level={1}>My Notes App</Heading>
          <View as="form" margin="3rem 0" onSubmit={createNote}>
            <Flex
              direction="column"
              justifyContent="center"
              gap="2rem"
              padding="2rem"
            >
              <TextField
                name="name"
                placeholder="Note Name"
                label="Note Name"
                labelHidden
                variation="quiet"
                required
              />
              <TextField
                name="description"
                placeholder="Note Description"
                label="Note Description"
                labelHidden
                variation="quiet"
                required
              />
              <View
                name="image"
                as="input"
                type="file"
                alignSelf={"end"}
                accept="image/png, image/jpeg"
              />

              <Button type="submit" variation="primary">
                Create Note
              </Button>
            </Flex>
          </View>
          <Divider />
          <Heading level={2}>Current Notes</Heading>
          <Grid
            margin="3rem 0"
            autoFlow="column"
            justifyContent="center"
            gap="2rem"
            alignContent="center"
          >
            {notes.map((note) => (
              <Flex
                key={note.id || note.name}
                direction="column"
                justifyContent="center"
                alignItems="center"
                gap="2rem"
                border="1px solid #ccc"
                padding="2rem"
                borderRadius="5%"
                className="box"
              >
                <View>
                  <Heading level="3">{note.name}</Heading>
                </View>
                <Text fontStyle="italic">{note.description}</Text>
                {note.image && (
                  <Image
                    src={note.image}
                    alt={`visual aid for ${notes.name}`}
                    style={{ width: 400 }}
                  />
                )}
                <Button
                  variation="destructive"
                  onClick={() => deleteNote(note)}
                >
                  Delete note
                </Button>
              </Flex>
            ))}
          </Grid>
          <Button onClick={signOut}>Sign Out</Button>
        </Flex>
      )}
    </Authenticator>
  );
}
```
