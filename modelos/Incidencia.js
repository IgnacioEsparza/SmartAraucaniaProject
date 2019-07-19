transicionSeguimientoBtn = () => {
    alert('Madre mía')
};
class ListItem {
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'row',
            padding: 10,
            marginLeft: 16,
            marginRight: 16,
            marginTop: 8,
            marginBottom: 8,
            borderRadius: 5,
            backgroundColor: '#FFF',
            elevation: 2,
        }}>
            {/* <Image source={{ uri: image_url }} style={{
                height: 50,
                width: 50,
            }} /> */}
            < View style={styles.container_text} >

                <TouchableOpacity onPress={() =>
                    this.transicionSeguimientoBtn(item)}
                    style={{ position: 'absolute' }}>
                </TouchableOpacity>

                <Text style={{
                    fontSize: 16,
                    color: '#000',
                }}>
                    {this.props.item.title}
                </Text>

                <View style={{ height: 0.5, width: "100%", backgroundColor: "#000" }} />

                <Text style={{
                    fontSize: 11,
                    fontStyle: 'italic',
                }}>
                    {this.props.item.description}
                </Text>

            </View >
            {/* <Image source={{ uri: estado_url }} style={styles.photo} /> */}
        </View >);
    }
}
