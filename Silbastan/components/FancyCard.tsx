import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native'
import React from 'react'

export default function FancyCard() {

    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    const onPressFuji = () => { openWebsite('https://www.japan-guide.com/e/e2172.html') }
    const onPressTemple = () => { openWebsite('https://kura2bus.com/blog/lempuyang-temple-the-gate-of-heaven-what-you-need-to-know-before-you-go/') }
    const onPressHagia = () => { openWebsite('https://wanderingsophia.com/visiting-hagia-sofia/') }
    const onPressEiffel = () => { openWebsite('https://www.toureiffel.paris/en/planning-smooth-visit') }
    return (
        //
        <View style={{ padding: 10 }}>
            <Text style={styles.headingText}>Trending Places</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Image source={{
                            uri: 'https://image.milimaj.com/i/milliyet/75/869x477/5f6fb79a55428408b83ad577.jpg'
                        }}
                            style={styles.cardImg}
                        />
                        <View style={styles.cardBody}>
                            <Text style={styles.cardTitle}>Fuji Mountain</Text>
                            <Text style={styles.cardLabel}>Japan</Text>
                            <Text numberOfLines={4} style={[styles.cardDescription, {
                                padding: 10,
                            }]}>Mount Fuji, located on Honshu Island, is Japan’s highest peak at 3,776 meters and one of the country’s most iconic symbols. This nearly perfectly symmetrical stratovolcano is a popular destination for climbers, photographers, and pilgrims, especially during the official climbing season in July and August. Surrounding Fuji are scenic lakes, hot springs, and cultural sites, and it has deep spiritual significance in Shinto and Buddhist traditions. Its snow-capped peak and reflection in nearby lakes make it a celebrated subject in Japanese art, photography, and tourism, drawing visitors from around the world.</Text>
                            <View>
                                <TouchableOpacity onPress={onPressFuji}>
                                    <Text style={styles.cardFooter}>Read more on web page...</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Image source={{
                            uri: 'https://www.ubudvillasrental.com/wp-content/uploads/2020/11/Lempuyang-Temple-The-Travelers-Hacks-You-Should-Know-4-3.jpg'
                        }}
                            style={styles.cardImg}
                        />
                        <View style={styles.cardBody}>
                            <Text style={styles.cardTitle}>Lempuyang Temple</Text>
                            <Text style={styles.cardLabel}>Indonesia</Text>
                            <Text numberOfLines={4} style={[styles.cardDescription, {
                                padding: 10,
                            }]}>Lempuyang Temple (Pura Lempuyang Luhur), located in East Bali, is one of the island’s oldest and most sacred temples and is famous for its iconic “Gates of Heaven,” a split stone gateway framing Mount Agung. Visitors come mainly for the famous photo spot—where a local creates the mirror effect with a small piece of glass—and typically visit early morning to avoid long queues and cloud cover. The temple requires modest clothing with a sarong, offers shuttle buses to reach the top area, and has donation-based entry plus small costs for sarong rental. Known for its spiritual atmosphere and dramatic views, it’s about 2–3 hours from popular Bali areas and is usually visited as part of a larger East Bali trip.</Text>
                            <View>
                                <TouchableOpacity onPress={onPressTemple}>
                                    <Text style={styles.cardFooter}>Read more on web page...</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Image source={{
                            uri: 'https://businessdiplomacy.net/wp-content/uploads/2021/02/shutterstock_1426866896-scaled.jpg'
                        }}
                            style={styles.cardImg}
                        />
                        <View style={styles.cardBody}>
                            <Text style={styles.cardTitle}>Hagia Sophia</Text>
                            <Text style={styles.cardLabel}>İstanbul</Text>
                            <Text numberOfLines={4} style={[styles.cardDescription, {
                                padding: 10,
                            }]}>Hagia Sophia (Ayasofya), located in Istanbul’s historic Sultanahmet district, was originally built in 537 AD by Byzantine Emperor Justinian I as a cathedral, later converted into a mosque after the Ottoman conquest in 1453, and then served as a museum from 1935 until its reconversion into a mosque in 2020. Famous for its massive dome, intricate mosaics, and fusion of Byzantine and Ottoman architectural styles, it stands as one of the world’s most important cultural and religious monuments. Visitors can enter through the Imperial Gate, admire the vast interior and ancient Christian mosaics alongside Islamic calligraphy panels, and experience a building that reflects nearly 1,500 years of history, influence, and spiritual significance.</Text>
                            <View>
                                <TouchableOpacity onPress={onPressHagia}>
                                    <Text style={styles.cardFooter}>Read more on web page...</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Image source={{
                            uri: 'https://www.aparisguide.com/eiffeltower/eiffel-tower003.jpg'
                        }}
                            style={styles.cardImg}
                        />
                        <View style={styles.cardBody}>
                            <Text style={styles.cardTitle}>Eiffel Tower</Text>
                            <Text style={styles.cardLabel}>France</Text>
                            <Text numberOfLines={4} style={[styles.cardDescription, {
                                padding: 10,
                            }]}>The Eiffel Tower, located on the Champ de Mars in Paris, was built for the 1889 World’s Fair by engineer Gustave Eiffel and has since become one of the most recognizable landmarks in the world. Standing 330 meters tall, it was once the tallest structure on Earth and is celebrated for its iron lattice design, panoramic city views, and nighttime light displays. Visitors can explore its three levels, dine in its restaurants, and enjoy sweeping views of Paris from the observation decks, making it both an engineering icon and a symbol of French culture and romance.</Text>
                            <View>
                                <TouchableOpacity onPress={onPressEiffel}>
                                    <Text style={styles.cardFooter}>Read more on web page...</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    container: { flexWrap: 'wrap' },
    cardElevated: { padding: 10 },
    card: {},
    cardImg: {
        height: 250,
        width: 300,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        marginTop: 10,
        elevation: 10,
        borderTopRightRadius: 40,
    },
    cardBody: {
        height: 200,
        width: 300,
        backgroundColor: '#c2dafcff',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 23,
        padding: 10,
        marginTop: 10
    },
    cardTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5
    },
    cardLabel: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5
    },
    cardDescription: {
        backgroundColor: '#8eb2e4ff',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 23,
    },
    cardFooter: {
        color: '#0918f0ff',
        marginTop: 5,
    },
})