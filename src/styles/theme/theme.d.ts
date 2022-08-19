import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColors: {
      primaryBackground: string;
      secondaryBackground: string;
      dashboardBackground: string;
      transactionsBackground: string;
      containerTransactions: string;
    };

    textColors: {
      titlePrimary: string;
      titleSecondary: string;
      subTitlePrimary: string;
      subTitleSecondary: string;
      textColor: string;
      linkColor: string;
      deactivate: string;
    };

    buttonColor: {
      entranceButton: string;
      exitButton: string;
      generalButtons: string;
      backButton: string;
    };

    typesColors: {
      entrancecolor: string;
      exitcolor: string;
    };

    scoolBar: {
      background: string;
      color: string;
    };

    modalColors: {
      backgroundColor: string;
      fontColor: string;
      buttonsColor: string;
    };

    inputColors: {
      backgroundColor: string;
    };
  }
}
