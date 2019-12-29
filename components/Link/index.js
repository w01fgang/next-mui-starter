// @flow strict
import React, { useCallback } from 'react';
import { Link as MUILink } from '@material-ui/core';
import { useRouter } from 'next/router';

type Props = {
  +href: string,
}

const Link = ({ href, ...props }: Props) => {
  const router = useRouter();
  const handleClick = useCallback((e) => {
    e.preventDefault();
    router.push(href);
  }, [router]);

  return <MUILink {...props} href={href} onClick={handleClick} />;
};

export default Link;
