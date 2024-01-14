import React, {useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  View,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  NativeModules,
  Platform,
} from 'react-native';
import {fetchAlbumsByUserId, fetchUsers} from '../../utils/api';
import styles from './styles';
import {colors} from '../../constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {pages} from '../../constants/pages';
import {useDispatch, useSelector} from 'react-redux';
import {
  setExpandedItemList,
  setUserList,
  setLoader,
  setLoadingAlbum,
  setAlbumData,
} from '../../redux/reducers/users';

interface UsersProps {
  navigation: string;
}

const HomeScreen: React.FC<UsersProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const {userList, expandedItemList, isLoading, albumLoader, albumList} =
    useSelector((state: any) => state.users);

  const {AlertModal} = NativeModules;

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoader(true));
      try {
        const data = await fetchUsers();
        dispatch(setUserList(data));
        dispatch(setExpandedItemList(data.map(user => user.id)));
        dispatch(setLoader(false));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const fetchAlbumsForExpandedItems = async () => {
      dispatch(setLoadingAlbum(true));
      try {
        const albumsDataPromises = expandedItemList?.map(userId =>
          fetchAlbumsByUserId(userId),
        );
        const albumsData = await Promise.all(albumsDataPromises);
        if (albumsData) {
          const flattenedAlbums = albumsData.flat();
          dispatch(setAlbumData(flattenedAlbums));
        }
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setLoadingAlbum(false));
      }
    };

    fetchAlbumsForExpandedItems();
  }, [dispatch, expandedItemList]);

  const renderItem = ({item}) => {
    const userId = item.id;
    const isExpanded = expandedItemList?.includes(userId);
    return (
      <View style={styles.borderName}>
        <View>
          <Text style={styles.artistName}>{item.name}</Text>
          {!isLoading && !albumLoader && (
            <Text style={styles.album}>ALBUMS</Text>
          )}
        </View>

        {isExpanded && (
          <View style={styles.centerList}>
            {albumLoader ? (
              <ActivityIndicator
                style={styles.activityIndicators}
                size="small"
                color={colors.white}
              />
            ) : (
              <FlatList
                data={albumList?.filter(
                  (album: any) => album?.userId === userId,
                )}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                  <View key={item.id} style={styles.deleteIcon}>
                    <View style={styles.line} />
                    <TouchableOpacity
                      style={styles.wrapAlbumName}
                      onPress={() =>
                        navigation.navigate(pages.ALBUMS, {
                          id: item.id,
                          title: item.title,
                        })
                      }>
                      <Text style={styles.albumTitle}>{item.title}</Text>
                    </TouchableOpacity>
                    <AntDesign
                      name="minuscircleo"
                      size={20}
                      color={colors.error}
                      onPress={() => deleteItem(item.id)}
                    />
                  </View>
                )}
              />
            )}
          </View>
        )}
      </View>
    );
  };

  const deleteItem = id => {
    if (Platform.OS === 'android') {
      AlertModal.showConfirmationDialog(
        'Confirm Deletion',
        'Are you sure you want to delete this album?\n\nImplemented with kotlin native module.\n',
        (isConfirmed, message) => {
          if (isConfirmed) {
            dispatch(setAlbumData(albumList?.filter(item => item.id !== id)));
          } else {
            console.log(message);
          }
        },
      );
    } else {
      Alert.alert(
        'Confirm Deletion',
        'Are you sure you want to delete this album?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Delete',
            onPress: () => {
              dispatch(setAlbumData(albumList?.filter(item => item.id !== id)));
            },
          },
        ],
        {cancelable: false},
      );
    }
  };

  if (isLoading) {
    return (
      <ActivityIndicator
        style={styles.activityIndicator}
        size="large"
        color={colors.white}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {userList?.length > 0 && (
        <>
          <View style={styles.artist}>
            <Text style={styles.subTitle}>Music Artists</Text>
          </View>
          <FlatList
            data={userList}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
