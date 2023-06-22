##### Easy set up of modals

when using mui for projects those have data to be created or edit the current data or deleting it would be nicer to have modals popup and that display our respective forms.

Most apps have tables with data showing which we can edit delete or even add new on the same page. So this package makes it easy to deal with them on the same page

wrap your app in the provider

```ts
import { ModalContextProvider } from "mui-dialogs";
<ModalContextProvider>
  <App />
</ModalContextProvider>;
```

now you can use your prefered modal anywhere. It also provide a usecontext hook for keeping the modal states

```ts
import { useModalContext, AddModal, EditModal, DeleteModal } from "mui-dialogs";
function App() {
  const { setEditModalOpen } = useModalContext();

  return (
    <>
      <EditModal >{
        // content
      }</EditModal>
      <AddModal >{
        //content
      }<AddModal />
      <DeleteModal >{
        // content
      }</DeleteModal >
      <button onClick={() => setEditModalOpen(true)}>open</button>
    </.>
  );
}
```
