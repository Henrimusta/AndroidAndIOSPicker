import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React from 'react';
import months from './Months';

export default function IosPicker({ month, setSelectedMonth }) {
    return (
        <RNPickerSelect
            style={styles}
            selectedValue={month}
            onValueChange={(value) => setSelectedMonth(value)}
            items={months.map((m) => ({ label: m.label, value: m.value }))}
        />
    );
}

const styles = StyleSheet.create({
    inputIOS: {
        width: '100%',
        marginLeft: 16,
        fontSize: 16,
    }
});