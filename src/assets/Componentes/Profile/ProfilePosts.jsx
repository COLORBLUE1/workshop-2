import React, { useEffect, useState } from 'react';
import a from '../img/2.png'
import b from '../img/3.png'
import c from '../img/4.png'
import d from '../img/5.png'

import { Grid, Skeleton, VStack } from '@chakra-ui/react';
import ProfilePost from './ProfilePost';



const ProfilePosts = () => {
    
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <Grid
      templateColumns={{
        sm: "repeat(1,1fr)",
        md: "repeat(3,1fr)",
      }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5].map((_, idx) => (
          <VStack key={idx} alignItems={"flex-start"} gap={4}>
            <Skeleton height="300px" />
          </VStack>
        ))}
      {!isLoading && (
        <>
          <ProfilePost imagen={a} />
          <ProfilePost imagen={b} />
          <ProfilePost imagen={c} />
          <ProfilePost imagen={d} />
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;