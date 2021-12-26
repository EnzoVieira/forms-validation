import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Formik } from "formik"

import { loginValidationSchema } from "../schemas/loginValidatorSchema"
import { TextInput } from "../components/TextInput"
import { Button } from "../components/Button"

interface IHandleSubmit {
    email: string
    password: string
}

export const SignIn = () => {
    const handleSubmit = ({ email, password }: IHandleSubmit) => {
        console.log(email, password)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            
            <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}
            validationSchema={loginValidationSchema}
          >
            {({ handleChange, handleBlur, values, errors, isValid }) => (
              <>
                <TextInput
                  placeholder="Email Address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  error={errors.email}
                />

                <TextInput
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                  error={errors.password}
                />

                <Button
                label="Login"
                onPress={() => handleSubmit(values)}
                disabled={!isValid}
                style={{ marginTop: 16 }}
                />
              </>
            )}
          </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 32,
        fontWeight: "600",
    }
})