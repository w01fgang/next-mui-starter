// @flow
import React from 'react';
import { Breadcrumbs as BreadcrumbsUI, Link, Typography } from '@material-ui/core';

type Data = {
  active: boolean,
  title: string,
  href: string
};

type Props = {
  data: Array<Data>
}

function Breadcrumbs({ data }: Props) {
  return (
    <BreadcrumbsUI aria-label="breadcrumb">
      {
        data.map((item) => {
          if (item.active) return <Typography key={item.title}>{item.title}</Typography>;
          return <Link color="primary" href={item.href} key={item.title}>{item.title}</Link>;
        })
      }
    </BreadcrumbsUI>
  );
}

export default Breadcrumbs;
