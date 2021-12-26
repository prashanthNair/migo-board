import { kycbankApiInstance } from '../../api';

export interface ICreateSessionPayload {
  beneficiaryname: string;
  accountholderame: string;
  branchifsccode: string;
  accountnumber: string
}
export const createKycBankSession = async (payload: ICreateSessionPayload) => {
  const {
    beneficiaryname, accountholderame, branchifsccode, accountnumber,
  } = payload;
  const reqParam = {
    BeneficiaryName: beneficiaryname,
    AccountHolderame: accountholderame,
    BranchIfscCode: branchifsccode,
    AccountNumber: accountnumber,
  };

  const { data } = await kycbankApiInstance.post('/', reqParam);
  console.log('DATA', data);
  return data;
};
