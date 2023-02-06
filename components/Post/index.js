import React, {useState} from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

// const dateFormat = (date) => {
//   const time = date.split('T');
//   time.push(...time[1].split('+'));
//   return `${time[0]} - ${time[2]}`;
// };
const dateFormat = (date) => {
	return new Date(date).toISOString().split('.')[0];
}

const Post = ({post: {
  id,
  average_rating, 
  reviews,
  country, 
  city, 
  hire_rate,
  open_job,
  client_total_spent,
  client_hires,
  active,
  avg_hourly_rate_paid,
  hourly_rate,
  fixed_price,
  parsing_completion_time
}}) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const showSkills = () => {
  //   if (skills.length > 0) setIsOpen(!isOpen);
  // };

  
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity>
        <Text style={styles.header} onPress={() => Linking.openURL(url)}>
          {title}
        </Text>
      </TouchableOpacity> */}
      <Text style={styles.item}>ID: {id}</Text>
      <Text style={styles.item}>Country: {country}</Text>
      <Text style={styles.item}>City: {city}</Text>
      <Text style={styles.item}>Average rating: {average_rating}</Text>
      <Text style={styles.item}>Reviews: {reviews}</Text>
      <Text style={styles.item}>Hire rate: {hire_rate}</Text>
      <Text style={styles.item}>Open job(s): {open_job}</Text>
      <Text style={styles.item}>Client_hires: {client_hires}</Text>
      <Text style={styles.item}>Active: {active}</Text>
      <Text style={styles.item}>Client total spent: {client_total_spent}</Text>
      <Text style={styles.item}>avg_hourly_rate_paid: {avg_hourly_rate_paid}</Text>
      <Text style={styles.item}>hourly_rate: {hourly_rate}</Text>
      <Text style={styles.item}>fixed_price: {fixed_price}</Text>
      <Text style={styles.textField}>
        parsing_completion_time: {dateFormat(parsing_completion_time)}
      </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  textField: {
    marginBottom: 8,
  },
  linkColor: {
    color: '#064cab',
  },
  container: {
    borderWidth: 3,
    borderColor: '#2a8002',
    marginBottom: 20,
    padding: 10,
  },
  item: {
    marginRight: 20,
    marginBottom: 4,
  },
  description: {
    padding: 14,
  },
  client: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 14,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#2a8002',
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  header: {
    marginRight: 8,
    paddingBottom: 10,
  },
  skillsOverlay: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 10,
  },
  skillsItems: {
    lineHeight: 24,
  },
  skillsClose: {
    width: '100%',
    padding: 0,
    overflow: 'hidden',
    height: 0,
  },
  skillsOpen: {
    width: '100%',
    padding: 0,
    overflow: 'hidden',
    height: 'auto',
  },
});

export default Post;
