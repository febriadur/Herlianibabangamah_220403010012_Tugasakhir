import {Text,Image,View,ScrollView,Button,Alert} from 'react-native';
export default function HomeScreen(){
    return(
        <View
        style={{
            flex:1,
            alignItems:'center'
            
            
            
           
        }}>
        <Text style={{
            fontSize:20,
            fontWeight:'bold',
            textAlign:"center",
        }}>Toko Heeals wanita</Text>
        <Text style={{
            fontSize:10,
            fontWeight:'bold',
        }}>produk</Text>
        <ScrollView>
        <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://s1.riseloka.com/product/Zavatu/ZVT%20338%20HITAM%20(1).jpg")
        }}style={{width:200,height:200,margin:5}} /> 
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.50.000,stok tinggal 2 pasang</Text>
        <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://s1.riseloka.com/product/Zavatu/ZVT%20174%20CREAM%20(1).jpg")
        }}style={{width:200,height:200,margin:5}}/>
         <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.60.000,stok tinggal 1 pasang</Text>
        <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image 
        source={{
            uri:("https://img.id.my-best.com/product_images/599d10877e6aecbb0795bb6e5c54723d.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=7643121530df97915daaaccbabd33051" )
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.55.000,stok tinggal 4 pasang</Text>
        <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://dynamic.zacdn.com/PgylNAM1-vMS-Tq9kJoR04kETUM=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/marelli-9608-9123673-2.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.70.000,stok tinggal 10 pasang</Text>
        <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://dynamic.zacdn.com/Le7dwpV_-jVRg59YkpON_KbD8kA=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/patris-2474-6538424-1.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.45.000,stok tinggal 6 pasang</Text>
        <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAYKnb30jRvznlAIQhPu1pypdNSdC5cAvKAB3m8uWutUgZ3KKlHoHUTp8HKGWaWOVDD-o&usqp=CAU")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.90.000,stok tinggal 8 pasang</Text>
        <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://media.karousell.com/media/photos/products/2022/10/19/sandal_wanita__sandal_hak_wani_1666155619_54291186_progressive.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.55.000,stok tinggal 4 pasang</Text>
        </ScrollView>
        <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        </View>
    )
}