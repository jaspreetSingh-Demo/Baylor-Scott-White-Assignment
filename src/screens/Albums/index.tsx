import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {colors} from '../../constants/Colors';
import {fetchAlbums, fetchAlbumsByAlbumId} from '../../utils/api';
import AlbumHeader from '../../components/AlbumHeader';
import {useDispatch, useSelector} from 'react-redux';
import {
  setAlbumData,
  setLoader,
  setIsAvailable,
} from '../../redux/reducers/album';

interface AlbumProps {
  error: Error;
  route: string;
  navigation: string;
}

const AlbumScreen: React.FC<AlbumProps> = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {albumData, isLoading, isAvailable} = useSelector(
    (state: any) => state.album,
  );
  const {id, title} = route?.params;
  const [error, setError] = useState(null);

  const fetchAlbumData = async () => {
    dispatch(setLoader(true));
    try {
      const data = await fetchAlbums();
      dispatch(setAlbumData(data));
      dispatch(setLoader(false));
      dispatch(setIsAvailable(true));
    } catch (error) {
      setError(error);
      dispatch(setLoader(false));
      dispatch(setIsAvailable(true));
    }
  };

  const renderItems = ({item}) => {
    return <Image source={{uri: item?.thumbnailUrl}} style={styles.img} />;
  };

  useEffect(() => {
    const fetchAlbum = async (id: string) => {
      dispatch(setLoader(true));
      try {
        const data = await fetchAlbumsByAlbumId(id);
        dispatch(setAlbumData(data));
        dispatch(setLoader(false));
        dispatch(setIsAvailable(false));
      } catch (error) {
        setError(error);
        dispatch(setLoader(false));
        dispatch(setIsAvailable(false));
      }
    };

    fetchAlbum(id);
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={colors.white} />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.error}>{error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <AlbumHeader
        goBack={() => navigation.goBack()}
        label={isAvailable ? 'All Albums' : title}
        onPressStar={() => fetchAlbumData()}
      />
        <FlatList
          numColumns={3}
          data={albumData}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItems}
        />
    </SafeAreaView>
  );
};

export default AlbumScreen;
