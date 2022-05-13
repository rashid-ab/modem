import React, { useState } from 'react'
import {
  StyleSheet, Text, TouchableOpacity, View, Image, Linking, Pressable
} from 'react-native'
import { connect } from 'react-redux'
import User from '../../assets/icons/addContact.png'
import UserAdded from '../../assets/icons/contact.png'
import Star from '../../assets/icons/star.png'
import AlertModal from '../../components/alertModal'
import Mail from '../../assets/icons/mail.png'
import I from '../../assets/icons/i.png'
import WebViewModal from '../../components/webViewModal'

const PressOfficeContact = props => {
  const { user, navigation } = props;
  const [addContact, setAddContact] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [webModal, setWebModal] = useState(false);

  const renderContactDetails = showDetails && <View style={styles.showDetailsContainer}>
  {user?.miniwebsite_login && user?.miniwebsite_type ?
  <TouchableOpacity style={styles.infoIconContainer} onPress={() => setWebModal(true)}>
    <Image source={I} style={styles.icon} />
  </TouchableOpacity> : null}
  {user?.address ? <Text style={styles.contactText}>{user.address}</Text> : null}
  {user?.contact1_phone ? <TouchableOpacity onPress={() => Linking.openURL(`tel://${user.contact1_phone}`)}>
    <Text style={[styles.contactText, styles.marginBottomExtra]}>T : {user.contact1_phone}</Text>
  </TouchableOpacity> : null}
  {user?.contact2_phone ? <TouchableOpacity onPress={() => Linking.openURL(`tel://${user.contact2_phone}`)}>
    <Text style={[styles.contactText, styles.marginBottomExtra]}>T : {user.contact2_phone}</Text>
  </TouchableOpacity> : null}
  {user?.mobile ? <TouchableOpacity onPress={() => Linking.openURL(`tel://${user.mobile}`)}>
    <Text style={[styles.contactText, styles.marginBottomExtra]}>T : {user.mobile}</Text>
  </TouchableOpacity> : null}
  {user?.contact1_mobile ? <TouchableOpacity onPress={() => Linking.openURL(`tel://${user.contact1_mobile}`)}>
    <Text style={[styles.contactText, styles.marginBottomExtra]}>T : {user.contact1_mobile}</Text>
  </TouchableOpacity> : null}
  {user?.contact2_mobile ? <TouchableOpacity onPress={() => Linking.openURL(`tel://${user.contact2_mobile}`)}>
    <Text style={[styles.contactText, styles.marginBottomExtra]}>T : {user.contact2_mobile}</Text>
  </TouchableOpacity> : null}
  {user?.phone ? <TouchableOpacity onPress={() => Linking.openURL(`tel://${user.phone}`)}>
    <Text style={[styles.contactText, styles.marginBottomExtra]}>T : {user.phone}</Text>
  </TouchableOpacity> : null}
  {user?.email ? <TouchableOpacity style={styles.rowCenter} onPress={() => Linking.openURL(`mailto:${user.email}?subject=Modem&body=We are your Fashion, Art and Design International Magazine`)}>
    <Text style={styles.contactText}>{user.email}</Text>
    <Image source={Mail} style={styles.mail} />
  </TouchableOpacity> : null}
  {user?.contact2_email ? <TouchableOpacity style={styles.rowCenter} onPress={() => Linking.openURL(`mailto:${user.contact2_email}?subject=Modem&body=We are your Fashion, Art and Design International Magazine`)}>
    <Text style={styles.contactText}>{user.contact2_name}</Text>
    <Image source={Mail} style={styles.mail} />
  </TouchableOpacity> : null}
</View>
  return(
    <>
      <View style={styles.alignCenter}>
        <Pressable onPress={() => setShowDetails(!showDetails)} style={{maxWidth: '94%', flexDirection: 'row'}}>
          {user?.name ? <Image source={Star} style={styles.star}/> : <View style={styles.star}></View>}
          <Text style={styles.contactName}>
            {user.name.replace(/&amp;\s*\/?/mg, '& ')}
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <Image source={addContact ? UserAdded : User} style={styles.addUser} /> 
            </TouchableOpacity>
          </Text>
        </Pressable>

      </View>
      {renderContactDetails}
      <AlertModal
        body={`"My Modem – the personal concierge" will be launched soon.You will be able to create your personalized APP here by selecting information
  according to your interests.`}
        title='My Modem'
        button='OK'
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <WebViewModal 
        setWebModal={setWebModal}
        webModal={webModal}
        navigation={navigation}
        miniwebsiteLogin={user?.miniwebsite_login}
        miniWebsiteType={user?.miniwebsite_type}
      />
    </>
  );
}


const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, {
  
})(PressOfficeContact)


const styles = StyleSheet.create({
  time: {
    fontSize: 18,
    color: '#646464',
    width: '35%',
    maxWidth: '35%',
    overflow: 'hidden',
    marginTop: 6
  },
  alignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '100%',
    flexWrap: 'wrap'
  },
  contactName: {
    color: 'black',
    fontSize: 26,
    flexDirection: 'row'
  },
  addUser: {
    height: 20,
    width: 20,
    marginLeft: 6,
    marginBottom: 3
  },
  www: {
    color: 'black',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    fontSize: 18,
    marginRight: 4
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
    marginHorizontal: 4
  },
  pinIconContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    marginHorizontal: 4
  },
  pinIcon: {
    height: 18,
    width: 9
  },
  eventDescription: {
    color: '#646464',
    fontSize: 18,
    marginTop: 4
  },
  star: {
    height: 14,
    width: 14,
    marginRight: 10,
    marginTop: 9
  },
  showDetailsContainer: {
    borderColor: '#b2b2b2',
    borderWidth: 1,
    minWidth: '100%',
    padding: 15,
    marginTop: 15
  },
  contactText: {
    fontSize: 20
  },
  mail: {
    height: 12,
    width: 17,
    marginLeft: 8
  },
  marginBottomExtra: {
    marginBottom: 20
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    height: 16,
    width: 6
  },
  infoIconContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
    alignSelf: 'flex-start',
    marginBottom: 8,
    marginRight: 5
  },
})


