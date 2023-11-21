// src/DenominationConverter.js
import React, { useState } from 'react';
import { InputNumber, Select, Form, Button } from 'antd';

const { Option } = Select;

const DenominationConverter = () => {
  const [denomination, setDenomination] = useState(0.01);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);

  const handleDenominationChange = (value) => {
    setDenomination(value);
  };

  const handleAmountChange = (value) => {
    setAmount(value);
  };

  const handleConvert = () => {
    const convertedAmount = amount / denomination;
    setResult(convertedAmount);
  };

  return (
    <Form layout="vertical">
      <Form.Item label="Select Denomination">
        <Select onChange={handleDenominationChange} defaultValue={0.01}>
          {[0.01, 0.1, 1, 10, 100].map((value) => (
            <Option key={value} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Enter Amount">
        <InputNumber onChange={handleAmountChange} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleConvert}>
          Convert
        </Button>
      </Form.Item>
      <Form.Item label="Result">
        <InputNumber value={result} enabled />
      </Form.Item>
    </Form>
  );
};

export default DenominationConverter;
