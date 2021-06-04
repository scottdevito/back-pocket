import * as React from "react";
import styled from "styled-components";
import { Address } from "../../types";
import leftSidebarAccount from "../../assets/images/leftSidebarAccount.svg";
import removeAccountIcon from "../../assets/icons/removeAccountIcon.svg";
import { Action } from "../../components/context/useWalletState";
import { useHistory, matchPath, useLocation } from "react-router-dom";
export interface LeftSidebarAccountProps {
  addressData: Address;
  dispatch: React.Dispatch<Action>;
}

const LeftSidebarAccount: React.FC<LeftSidebarAccountProps> = (props) => {
  const { pathname } = useLocation();

  const match = matchPath(pathname, {
    path: "/:addressIdFromUrl/details",
    exact: true,
    strict: false,
  });

  let history = useHistory();

  return (
    <LeftSidebarAccountWrapper>
      <AccountContentWrapper>
        <RemoveAccountIcon
          src={removeAccountIcon}
          onClick={() => {
            props.dispatch({
              type: "remove_address",
              payload: { address: props.addressData },
            });

            // If the user removed the address that is currently being viewed, re-route them to the add address page
            if (!!match?.isExact) {
              history.push(`/`);
            }
          }}
        />
        <AccountAddressHeader>{props.addressData.name}</AccountAddressHeader>
      </AccountContentWrapper>
    </LeftSidebarAccountWrapper>
  );
};

export default LeftSidebarAccount;

const LeftSidebarAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 90%;
  width: 270px;
  height: 190px;
  word-break: break-all;
  background-image: url(${leftSidebarAccount});
  background-position: center;
  background-repeat: no-repeat;
`;

const AccountContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  max-height: 55%;
  height: 55%;
  color: #fff;
  padding: 10px 10px;
`;

const AccountAddressHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  max-width: 60%;
  font-weight: 600;
`;

const RemoveAccountIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
