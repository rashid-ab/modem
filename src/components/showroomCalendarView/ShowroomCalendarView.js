import React, { useState } from 'react'
import {
  StyleSheet, View
} from 'react-native'
import { connect } from 'react-redux'
import { Calendar } from "react-native-calendars";

const ShowroomCalendarView = ({ setSelectedDate, selectedDate,closeCalenderModal }) => {
  // const [markedDates, setMarkedDates] = useState({});

  return(
    <View style={styles.row}>
      <Calendar
        style={{
          marginTop: 40
        }}
        
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          closeCalenderModal(0)
          // if (startDay && !endDay) {
          //   const date = {}
          //   for (const d = moment(startDay); d.isSameOrBefore(day.dateString); d.add(1, 'days')) {
          //     date[d.format('YYYY-MM-DD')] = {
          //       marked: true,
          //       color: 'black',
          //       textColor: 'white'
          //     };

          //     if(d.format('YYYY-MM-DD') === startDay) date[d.format('YYYY-MM-DD')].startingDay = true;
          //     if(d.format('YYYY-MM-DD') === day.dateString) date[d.format('YYYY-MM-DD')].endingDay = true;
          //   }

          //   setMarkedDates(date);
          //   setEndDay(day.dateString);

          //   setDateRange({
          //     start: startDay,
          //     end: day.dateString
          //   })
          // } else {
          //   setStartDay(day.dateString)
          //   setEndDay(null)
          //   setMarkedDates({
          //     [day.dateString]: {
          //       marked: true,
          //       color: 'black',
          //       textColor: 'white',
          //       startingDay: true,
          //       endingDay: true
          //     }
          //   })
          // }
        }}
        monthFormat={"yyyy MMM"}
        hideDayNames={false}
        markingType={'period'}
        markedDates={{[selectedDate]: {
          marked: true,
          color: 'black',
          textColor: 'white',
          startingDay: true,
          endingDay: true
        }}}
        theme={{
          selectedDayBackgroundColor: '#646464',
          selectedDayTextColor: 'white',
          monthTextColor: 'blue',
          dayTextColor: 'black',
          textMonthFontSize: 18,
          textDayHeaderFontSize: 16,
          arrowColor: '#e6e6e6',
          dotColor: 'black'
        }}
      />
    </View>
  );
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, {
  
})(ShowroomCalendarView)


const styles = StyleSheet.create({

})
