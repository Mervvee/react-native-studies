import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Clipboard from '@react-native-clipboard/clipboard';

//Form validation
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Password length must be at least 4')
    .max(16, 'Password length must be at most 16')
    .required('Password is required')
})

export default function App() {
  //burada kullanici secimlerini hatirlayan secim kutulari olusturuyoruz ki sifre olusturmayi ona göre yapalim
  const [password, setPassword] = useState('')
  //olusturulan sifre burada tutulacak
  const [isPassGenerated, setIsPassGenerated] = useState(false)
  //sifre uretildi mi uretilmedi mi
  const [lowerCase, setLowerCase] = useState(false)
  //küçük harf ekle secti mi
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  //rakam ekle secti mi
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
    //hangi karakterlerin kullanilabilecegini belirliyoruz
    let characterList = ''

    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numberChars = '0123456789'
    const symbolChars = '!@#$%&*_+:;?,./-='

    if (lowerCase) {
      characterList += lowerCaseChars
    }
    if (upperCase) {
      characterList += upperCaseChars
    }
    if (numbers) {
      characterList += numberChars
    }
    if (symbols) {
      characterList += symbolChars
    }

    // Hiçbir seçenek seçilmediyse uyarı
    if (characterList === '') {
      Alert.alert('Lütfen en az bir karakter türü seçin!')
      return
    }

    const passwordResult = createPassword(characterList, passwordLength)
    setPassword(passwordResult) // yukaridaki useState e atif olarak olusturulani sonucuna atiyoruz . olusturulan sifreyi ekrana yollayacak
    setIsPassGenerated(true) // ayni sekilde yukariya atif. ui icin sifre olustugunun bilgisini tutar
  }

  const createPassword = (characters: string, passwordLength: number) => {
    //belirlenen karakterlerden rastgele sifre olusturma islemi
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.floor(Math.random() * (characters.length))
      result += characters.charAt(characterIndex)
    }
    console.log("result ", result);
    return result

  }

  const resetPasswordState = () => {
    //yapılan secimlerimizi sifirlama fonksiyonu
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(false)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)

  }

  const copyToClipboard = () => {
    Clipboard.setString(password);
    Alert.alert('Copied!', 'Password copied to clipboard');
  };

  return (
    //keyboard should persist taps dedigimizde klavye surekli kapanmasın veya acılmasin hic gibi kontrolleri yapariz
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={{ ...styles.appContainer, margin: 10 }}>
        <View style={styles.formContainer}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', margin: 10 }}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              console.log(values);
              generatePasswordString(Number(values.passwordLength)) // number yerine () acamadan da +values ile yapılabilir bu convert eder zaten

            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              //handleBlur, buna su an ihtiyacimiz yok ilgilenmeyelim
              handleSubmit,
              //isSubmitting,
              handleReset,
              /* and other goodies */
            }) => (
              //formlar sekmesi, 5 adet viewle form ekleyeceğiz ki kullanici secim yapsin
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={{ ...styles.heading, fontSize: 15, fontWeight: 'bold' }}>Password Length:</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>{errors.passwordLength}</Text>
                    )}
                  </View>
                  <TextInput
                    style={{ ...styles.inputStyle, borderWidth: 1, padding: 5, width: '40%', borderRadius: 5 }}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder='Ex. 8'
                    keyboardType='numeric'
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lowercase Letters</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor='#92f0d5ff'
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase Letters</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor='#92f0d5ff'
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor='#92f0d5ff'
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor='#92f0d5ff'
                  />
                </View>


                <View style={styles.formActions}>
                  <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      handleReset()
                      resetPasswordState() //senin ekstra reset işlemin
                    }}>
                    <Text style={styles.buttonText}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPassGenerated ? (
          <View style={styles.footer} >
            <Text>Your Password:</Text>
            <Text>Long press to copy!</Text>
            <TouchableOpacity onLongPress={copyToClipboard} activeOpacity={0.5}>
              <Text
                style={styles.generatedPassword}
                selectable={true}
              >
                {password}
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {},
  formContainer: {},
  inputWrapper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 5 },
  formActions: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
  inputColumn: {},
  inputStyle: {},
  heading: { fontSize: 14 },
  errorText: {
    fontSize: 12,
    color: '#db0909ff',  // veya '#e74c3c' kırmızı ton
    fontWeight: '500',
    marginTop: 4,
    fontStyle: 'italic',
  },
  buttonText: {
    fontSize: 16,
    color: '#161515ff',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#92f0d5ff',
    borderRadius: 15,
  },
  primaryBtn: {
    backgroundColor: '#230653ff',
    borderRadius: 15,
  },
  secondaryBtn: {},
  footer: {
    margin: 25,
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#ceebe0ff',
    padding: 10, borderRadius: 5,
    borderColor: '#066832ff'
  },
  generatedPassword: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#230653ff',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#92f0d5ff',
    letterSpacing: 1.7,
  },
})

