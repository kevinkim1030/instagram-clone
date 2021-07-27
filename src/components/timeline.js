/* eslint-disable no-nested-ternary */
import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';
import Post from './post';

export default function Timeline() {
  // need to get photos of the logged in user
  const { photos } = usePhotos();

  // console.log('photos', photos);
  // on load(photos), use react skeleton
  // if there are photos, render them(create a post component)
  // if there are no photos, tell the user to create some photos
  return (
    <div className="container col-span-2">
      {!photos ? (
        <Skeleton count={4} width={640} height={400} className="mb-5" />
      ) : photos?.length > 0 ? (
        photos.map((content) => <Post key={content.docId} content={content} />)
      ) : (
        <p className="text-center text-2xl">Follow people to see photos</p>
      )}
    </div>
  );
}
