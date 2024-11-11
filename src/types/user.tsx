/* eslint-disable @typescript-eslint/no-explicit-any */

interface UserLanguageType {
  displayOrder?: number;
  id?: string;
  languageCode: string;
  languageLevelCode: string;
}
interface UserLocationType {
  cityCode?: string;
  districtCode?: string;
  snapAddress?: string;
  isVerified: boolean;
}
interface UserPhoneNumberType {
  phoneNumber?: string;
  isVerified: boolean;
}
export interface UserType {
  avatarUrl?: string;
  email?: string;
  languages?: UserLanguageType[];
  location: UserLocationType;
  nationalityCode?: string;
  phoneNumber: UserPhoneNumberType;
  profileId?: string;
  userId?: string;
  userName: string;
}
