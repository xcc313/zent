import React from 'react';
import Dialog from 'dialog';
import Button from 'button';
import Image from '../image';
import Voice from '../voice';
import Video from '../video';

let instance;

const TYPE_MAP = {
  image: Image,
  voice: Voice,
  video: Video
};

const { openDialog } = Dialog;

export default props => {
  let Node = TYPE_MAP[props.type];
  let { type, title, ...rest } = props;
  if (!instance) {
    instance = openDialog({
      className: 'zent-upload',
      title: props.title,
      children: <Node {...rest} />,
      footer: <Button>确定</Button>
    });
  }
  return instance;
};
