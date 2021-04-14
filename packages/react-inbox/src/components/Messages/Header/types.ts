import { IMessage } from "~/types";

export interface IHeaderProps {
  title: string;
  unreadMessageCount?: number;
  markAllAsRead?: () => any;
  currentTab?: {
    id: string;
    label: string;
    filter?: {
      isRead: boolean;
    };
  };
  messages: IMessage[];
}