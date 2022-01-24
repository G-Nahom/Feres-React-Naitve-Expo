import { ActionSheetProvider,connectActionSheet } from '@expo/react-native-action-sheet';
import { useActionSheet } from '@expo/react-native-action-sheet';

class AppContainer extends React.Component {
  render() {
    return (
      <ActionSheetProvider>
        <ConnectedApp />
      </ActionSheetProvider>
    );
  }
}


export default function showAction() {
    const options = ['Delete', 'Save', 'Cancel'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;
  
  const { showActionSheetWithOptions } = useActionSheet(
    {
        options:options,
        cancelButtonIndex:cancelButtonIndex,
        destructiveButtonIndex:destructiveButtonIndex,
      },
      (buttonIndex) => {
        // Do something here depending on the button index selected
      }

  );
 
}

  const ConnectedApp = connectActionSheet(showAction);
  
  export default ConnectedApp;