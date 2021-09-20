## Available Scripts

In the project directory, you can run:

### `npm run build`

Bundles the app for production mode.\
In order to test the production build 
you can use a static server. 
Run the `npm install -g serve` command 
on the terminal then run the `serve -s build` 
command. Default server will be `5000` if you
want to change it, run the `serve -s build -l 3000` 
(after -l will define the port) command. If
`serve -s build -l 3000` command could not be worked
because of `running scripts is disabled on this system`
error, you should open the powershell in administrator
mode then enter the command `Set-ExecutionPolicy RemoteSigned`.

### `npm run dev`

Bundles the app for development mode.\

### `npm run serve`

It will run the application on http://localhost:3000
