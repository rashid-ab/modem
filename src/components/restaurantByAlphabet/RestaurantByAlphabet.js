import React, { useState } from 'react'
import {
  StyleSheet, TouchableOpacity, View, Text, Image, Linking, Pressable
} from 'react-native'
import User from '../../assets/icons/addContact.png'
import UserAdded from '../../assets/icons/contact.png'
import AlertModal from '../../components/alertModal'
import WebViewModal from '../../components/webViewModal'
// import Star from '../../assets/icons/star.png'
import I from '../../assets/icons/i.png'

const RestaurantByAlphabet = props => {
  const { citiesresturant, navigation } = props
  const [addContact, setAddContact] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [webModal, setWebModal] = useState(false);

  const handlepress = async () => {
    const supported = await Linking.canOpenURL(citiesresturant?.website);
    
    if(supported) Linking.openURL(citiesresturant?.website)
    
    return console.log('working fine');
  }
  return(
    <View style={styles.container}>
      <View style={styles.user}>
        <Pressable style={{maxWidth: '94%'}}>
          <Text style={[styles.contactName, {flexDirection: 'row'}]}>
            {citiesresturant.name.replace(/&amp;\s*\/?/mg, '& ')}
            <Pressable onPress={() => setShowModal(true)}>
              <Image source={addContact ? UserAdded : User} style={styles.addUser} /> 
            </Pressable>
          </Text>
        </Pressable>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.eventDuration}>{citiesresturant.address}</Text>
        {citiesresturant?.phone ? 
          <TouchableOpacity onPress={() => Linking.openURL(`tel://${citiesresturant.phone}`)}>
            <Text style={styles.eventDuration}>P: {citiesresturant.phone}</Text>
          </TouchableOpacity>: null }
          {citiesresturant?.website ?
          <TouchableOpacity onPress={() => Linking.openURL(citiesresturant?.website)}>
            <Text style={styles.eventDuration}>{citiesresturant?.website}</Text>
          </TouchableOpacity> : null}
        {citiesresturant?.email ? 
          <TouchableOpacity onPress={() => Linking.openURL(`mailto:${citiesresturant.email}?subject=Modem&body=We are your Fashion, Art and Design International Magazine`)}>
            <Text style={styles.eventDuration}>{citiesresturant.email}</Text>
          </TouchableOpacity>: null }
      </View>
      <AlertModal
        body={`"My Modem – the personal concierge" will be launched soon.You will be able to create your personalized APP here by selecting information according to your interests.`}
        title='My Modem'
        button='OK'
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <WebViewModal 
        setWebModal={setWebModal}
        webModal={webModal}
        navigation={navigation}
        miniwebsiteLogin={citiesresturant?.miniwebsite_login}
        miniWebsiteType={citiesresturant?.miniwebsite_type}
      />
    </View>
    
  );
}

export default RestaurantByAlphabet


const styles = StyleSheet.create({
  container: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    paddingTop: 7,
    paddingBottom: 13,
    marginTop: -1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  contactName: {
    color: 'black',
    fontSize: 26,
    marginTop: 5
  },
  addUser: {
    height: 18,
    width: 18,
    marginLeft: 6,
    marginBottom: 3,
  },
  alignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2
  },
  playIcon: {
    height: 10,
    width: 10 
  },
  playIconContainer: {
    paddingLeft: 12,
    paddingRight: 10,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    width: 40,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  pinIconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    marginLeft: 4,
    width: 40,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  pinIcon: {
    height: 16,
    width: 9
  },
  innerContainer: {
    marginLeft: 24,
    marginRight: 10
  },
  showroomImg: {
    height: 200,
    width: '100%',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  star: {
    height: 14,
    width: 14,
    marginRight: 10
  },
  www: {
    color: 'black',
    paddingHorizontal: 5,
    paddingVertical: 0,
    borderRadius: 6,
    borderWidth: 1,
    fontSize: 16,
    marginRight: 4
  },
  eventDuration: {
    color: '#646464',
    fontSize: 18
  },
  showroomDetails: {
    borderColor: '#b2b2b2',
    borderWidth: 1,
    marginVertical: 10
  },
  additionalInfo: {
    color: '#000000',
    fontSize: 18,
  },
  padding10: {
    padding: 10
  },
  mail: {
    height: 12,
    width: 17,
    marginHorizontal: 8
  },
  infoIconContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
    width: 40,
    justifyContent: 'center',
    flexDirection: 'row',
    marginRight: 5
  },
  icon: {
    height: 16,
    width: 6
  },
})

