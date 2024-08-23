import { useFormContext } from 'react-hook-form';

import { FlexBox, Input, Typography } from '@/components/common';

import { FormValue } from '@/types/form/form.types';

import styles from './ItemsInputUnit.module.scss';

const ItemsInputUnit = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValue>();

  return (
    <FlexBox flexDirection='column' gap='24px' className={styles.container}>
      <div className={styles.bg} />
      <FlexBox justifyContent='center'>
        <Typography fontWeight={600} fontSize='20px' color='red1'>
          新規メニュー
        </Typography>
      </FlexBox>
      <FlexBox gap='24px' className={styles.inputContainer}>
        <Input
          // label='食料(食分)'
          label='マヨネーズ'
          required
          width='calc((100% - 24px) / 2)'
          className={styles.input}
          {...register('items.food')}
          error={errors['items']?.['food']?.message}
        />
        <Input
          label='片栗粉'
          required
          width='calc((100% - 24px) / 2)'
          className={styles.input}
          {...register('items.water')}
          error={errors['items']?.['water']?.message}
        />
        <Input
          label='水'
          required
          width='calc((100% - 24px) / 2)'
          className={styles.input}
          {...register('items.blanket')}
          error={errors['items']?.['blanket']?.message}
        />
        <Input
          label='ソース'
          required
          width='calc((100% - 24px) / 2)'
          className={styles.input}
          {...register('items.phone')}
          error={errors['items']?.['phone']?.message}
        />
        <Input
          label='塩'
          required
          width='calc((100% - 24px) / 2)'
          className={styles.input}
          {...register('items.flashlight')}
          error={errors['items']?.['flashlight']?.message}
        />
        <Input
          label='チキン'
          required
          width='calc((100% - 24px) / 2)'
          className={styles.input}
          {...register('items.television')}
          error={errors['items']?.['television']?.message}
        />
        <Input
          label='紅生姜'
          required
          width='calc((100% - 24px) / 2)'
          className={styles.input}
          {...register('items.fan')}
          error={errors['items']?.['fan']?.message}
        />
        <Input
          label='のり'
          required
          width='calc((100% - 24px) / 2)'
          className={styles.input}
          {...register('items.generator')}
          error={errors['items']?.['generator']?.message}
        />
        <Input
          label='小麦粉'
          required
          width='calc((100% - 24px) / 2)'
          className={styles.input}
          {...register('items.tent')}
          error={errors['items']?.['tent']?.message}
        />
        <Input
          label='食制限対応'
          required
          width='calc((100% - 24px) / 2)'
          className={styles.input}
          {...register('items.heatPack')}
          error={errors['items']?.['heatPack']?.message}
        />
        <Input
          label='鰹節'
          required
          width='calc((100% - 24px) / 2)'
          className={styles.input}
          {...register('items.megaphone')}
          error={errors['items']?.['megaphone']?.message}
        />
      </FlexBox>
    </FlexBox>
  );
};

export default ItemsInputUnit;
