import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'John Doe',
            status: 'Online',
            imageUrl: 'https://media.istockphoto.com/id/2172873491/photo/university-student-and-man-in-portrait-outdoor-on-campus-with-book-for-education-learning-and.jpg?s=612x612&w=0&k=20&c=0jJ62Pxg9qWg2DKCl0pVQmN1j618h01SXJ7DGdlpsZM=',
        },
        {
            uid: 2,
            name: 'Jane Smith',
            status: 'Offline',
            imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
        },
        {
            uid: 3,
            name: 'johnson Thomas',
            status: 'Online',
            imageUrl: 'https://i.pinimg.com/736x/be/a3/49/bea3491915571d34a026753f4a872000.jpg',
        },
    ];

    return (
        <View>
            <Text style={{fontSize: 20,fontWeight: 'bold', padding: 10,margin: 10}}>
                ContactList
            </Text>

            <View >
                <ScrollView  horizontal={true} >
                    {contacts.map(({uid, name, status, imageUrl}) => (
                    <View key={uid} style={styles.userCard}>
                        <Image source={{uri: imageUrl}} style={styles.userImage} />
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.userStatus}>{status}</Text>
                    </View>
                ))}
                </ScrollView>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userCard: {
        backgroundColor: 'lightgray',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        alignItems: 'center',
    },
    userImage:{
        height: 200,
        width: 200,
        borderRadius: 200 / 2,
    },
    userName:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    userStatus:{
        color: 'gray'
    },
})
