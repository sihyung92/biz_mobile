import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator,  DrawerContentScrollView,  DrawerItemList,  DrawerItem,drawerPosition} from '@react-navigation/drawer';

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Open drawer"
        
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
}
//목록 리스트 여따가 밑에 하나씩 추가하면됨 
/*function Notifications() {
  return (
    <View>
      <Text>Notifications Screen</Text>
    </View>
  );
}
 //<Drawer.Screen name="Notifications" component={Notifications} />
*/
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />

    </DrawerContentScrollView>
  );
}
////////////////////////////////////////////
const Drawer = createDrawerNavigator(
  
);

//사이드바 메뉴 항목 추가 .
function MyDrawer() {
  return (
    <Drawer.Navigator drawerPosition ='left'  drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={Feed} />
     
      
    </Drawer.Navigator>
    
  );
}
/////////////////////
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}