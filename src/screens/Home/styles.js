import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #63c2d1;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.Text`
  width: 230px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
export const SearchView = styled.View`
  background-color: #4eadbe;
  height: 50px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
`;

export const SearchTextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #ffffff;
`;