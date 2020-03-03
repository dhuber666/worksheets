import React from 'react';
import {Document, Page, Text, View, StyleSheet} from '@react-pdf/renderer';

interface Props {
    calculations?: string[];
    name: string;
}

// Create Document Component
const MyDocument = (props: Props) => (
    <Document title={"Worksheets"}>
        <Page size="A4" style={styles.page}>
            <Text style={{fontSize: 24, textAlign: "center", marginBottom: 20}}>Arbeitsblatt für {props.name}</Text>
            <View style={styles.row}>
                {props.calculations?.map((calc, id) => <Text key={id} style={styles.calculation}>{calc}</Text>)}


            </View>

        </Page>
    </Document>
);

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        paddingTop: 30,

    },
    row: {
        flexDirection: "row",

        justifyContent: "flex-start",
        flexWrap: "wrap",

    },
    calculation: {

        margin: 20
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

export default MyDocument;