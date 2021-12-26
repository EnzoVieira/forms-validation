import React from "react"
import { StyleSheet, TextInput as TxtInput, TextInputProps, Text } from "react-native"

interface IProps extends TextInputProps {
    error?: string
}

export const TextInput = ({error, ...rest}: IProps): JSX.Element => {
    return (
        <>
            <TxtInput
            style={styles.textInput}
            { ...rest }
            />
            <Text style={styles.errorMessage}>{error}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: "#f0f0f0",
        paddingHorizontal: 20,
        paddingVertical: 16,
        marginTop: 16,
        width: "80%",
        borderRadius: 6
    },
    errorMessage: {
        color: "red"
    }
})