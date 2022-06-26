# google-doc-clone, Distributed Computing Course Project
## Project Objective
The main objective of our project is to implement a clone to google docs, which is a real-time text editor that enables multiple users to edit the same document using different devices on different networks and all their work is synchronized with each other to ensure that the text editor is working real-time. The project should be able to handle clients’ crashes and retain the text document contents. The project is implemented using the client-server architecture, where the client is the frontend of our system, where the user can use the application, and the server part is the backend that manages the clients’ requests and the database.

## Libraries/APIs used
In our project we used:
1. `React` in the client's side (frontend)
2. `Node.js` in the server's side (backend)
3. `Quill Rich Text Editor` at the client's side to offer formatting options for the text

## Link to YouTube Video
https://www.youtube.com/watch?v=51RgNkEz33Y

## How To Open Our Text Editor?
- Use the following link https://text-editor-team11-client.herokuapp.com/, this will open a new document with a randomly generated ID.
- In order to access the same document from multiple devices, use the above link and add `documents/`+ file ID.
- For example https://text-editor-team11-client.herokuapp.com/documents/doc1 and use the same ID `doc1` name in all devices to open the same document.

## How To Open Our Second Text Editor?
- You can test the application from here: https://golden-sunflower-a1683a.netlify.app/
- you click on the link and a new room is created for collaborative text editing, the user can copy the link and give it to other users for real time text editing
- The system supports local caching so the data is saved locally and the user can still view the website while he is offline
- The rich text tool-bar has many features that allows the user to professionally edit the text
- There is side navigation bar with download icon to download the document and a plus sign icon to add a new room
