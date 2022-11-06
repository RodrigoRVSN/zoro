# zoro

## Why Context Api using a state (useState) is bad for Client State Management?

- In React, when a state changes, all the components using their states are rerendered. This is not necessary in cases which the component is not using that specific data.

## What strategy is being use instead a state?

- The context is using a `useRef` to store and change the value in provider, and the `useSelector` hook in `lib/useSelector.tsx` is using a `useState` being instancied in each component with the respective value being used in that component, managed by the `listenerId`, using and updating the values from the `useRef` of the Context Api. 
- This strategy is based in Redux and Zustand.

___
## 💻 Prerequisites

- Install LTS Node version.

<!--- #################### mudar pré-requisitos  ####################--->
___
## 🛠 Tools used

- React (Vite)
- Typescript
- React hooks

<!--- #################### mudar ferramentas #################### --->

___

## 🚀 Installing zoro

#### Clone repository

```powershell
  git clone https://github.com/RodrigoRVSN/zoro.git
```

#### Install dependencies

```powershell
  yarn
```

#### Run app

```powershell
  yarn dev
```
___

## 📫 Contribuiting with zoro

To contribue with zoro, follow the steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <name_branch>`.
3. Make the changes and confirm: `git commit -m '<message_commit>'`
4. Send to original repository: `git push origin <main_branch> / <local>`
5. Send the pull request.

Alternatively, see the GitHub documentation at [how to create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
___
## 🤝 Contributors

Made with ❤️ by:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://github.com/rodrigorvsn.png" width="100px;" alt="Foto do Rodrigo Victor no GitHub"/><br>
        <sub>
          <b>Rodrigo Victor</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

