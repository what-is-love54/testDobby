import React, {memo} from 'react';
import {Text} from 'react-native';
// common
import {globalStyles} from '~/styles';

interface FooterComponentProps {
  handleCalculatePrice: number;
  handleCalculatePDW: number;
}

export const FooterComponent: React.FC<FooterComponentProps> = memo(
  ({handleCalculatePrice, handleCalculatePDW}) => {
    return (
      <>
        <Text style={[globalStyles.color, globalStyles.mainFontSize]}>
          Sum of products: {handleCalculatePrice}
        </Text>
        <Text style={[globalStyles.color, globalStyles.mainFontSize]}>
          VAT: {handleCalculatePDW}
        </Text>
      </>
    );
  },
);
