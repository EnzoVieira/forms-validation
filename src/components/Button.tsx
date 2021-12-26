import React from "react"
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

interface IProps extends TouchableOpacityProps {
    label: string
}

export const Button = ({ label, style, disabled, ...rest }: IProps): JSX.Element => {
    return (
        <TouchableOpacity 
        style={[
            styles.button,
            { backgroundColor: disabled ? "#c0c0c0" : "#764abc" },
            style
        ]} 
        { ...rest }
        >
            <Text 
            style={[
                styles.label, 
                { color: disabled ? "black" : "white" }
            ]}
            >
                { label }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        width: "80%",
        alignItems: "center",
        borderRadius: 6
    },
    label: {
        fontWeight: "600"
    }
})