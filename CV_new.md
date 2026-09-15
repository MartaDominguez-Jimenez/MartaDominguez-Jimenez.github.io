\documentclass[11pt]{article}

% --- Fonts & typography ---
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
\usepackage[sc]{mathpazo} % Palatino/Palladio with small caps
\usepackage{microtype}

% --- Page layout ---
\usepackage{geometry}
\geometry{
  paper=letterpaper,
  left=0.62in,
  right=0.62in,
  top=0.62in,
  bottom=0.75in
}

% --- Tables and links ---
\usepackage{tabularx}
\usepackage{array}
\usepackage{hyperref}
\hypersetup{
  colorlinks=true,
  urlcolor=black,
  linkcolor=black,
  citecolor=black
}

% --- Document style ---
\pagestyle{empty}
\setlength{\parindent}{0pt}
\setlength{\parskip}{0pt}

% Indentation used throughout the CV body
\newlength{\cvindent}
\setlength{\cvindent}{1.2em}

% A section header with a rule underneath (matches the PDF style)
\newcommand{\cvsection}[1]{%
  \vspace{1.1em}%
  {\large\textsc{#1}}\par
  \vspace{0.35em}%
  \hrule
  \vspace{0.75em}%
}

% Two-column line: left text (wraps), right text (right-aligned, natural width)
\newcommand{\cvline}[2]{%
  \begin{tabularx}{\textwidth}{@{\hspace{\cvindent}}>{\raggedright\arraybackslash}Xr}
    #1 & #2\\
  \end{tabularx}
  \vspace{0em}%
}

% Two-column sub-line in smaller font + a tiny gap after (as in the PDF)
\newcommand{\cvsubline}[2]{%
  {\small
  \begin{tabularx}{\textwidth}{@{\hspace{\cvindent}}>{\raggedright\arraybackslash}Xr}
    #1 & #2\\
  \end{tabularx}}%
  \vspace{0em}%
}

% Indented paragraph text (no right column)
\newcommand{\cvtext}[1]{%
  \hspace{\cvindent}#1\par
}

\begin{document}

\begin{center}
  {\huge\textsc{Marta Domínguez-Jiménez}}\par
  \vspace{0.2em}
  {\small
    \href{mailto:marta.dominguez@cemfi.edu.es}{marta.dominguez@cemfi.edu.es}\par
    Casado del Alisal 5, 28014, Madrid, Spain\\
    \href{https://martadominguez-jimenez.github.io/}{https://martadominguez-jimenez.github.io/}}  
}
\end{center}

% --- Sections ---
\cvsection{Education}
\cvline{\textbf{Ph.D.\ in Economics}}{2023--2027 (expected)}
\cvsubline{CEMFI}{}\\

\cvline{\textbf{MRes in Economics and Finance}}{2021--2023}
\cvsubline{CEMFI}{}\\

\cvline{\textbf{MA in European Political and Governance Studies}}{2017--2018}
\cvsubline{College of Europe, Bruges}{}\\

\cvline{\textbf{BA in Economics and Management}}{2014--2017}
\cvsubline{University of Oxford}{}

\cvsection{References}
\begin{tabular*}{\textwidth}{@{\hspace{\cvindent}\extracolsep{\fill}}llll}
  \textbf{Sebastian Fanelli} &
  \textbf{Nezih Guner} &
  \textbf{Josep Pijoan-Mas}\\
  \small CEMFI &
  \small CEMFI &
  \small CEMFI\\
  \small \href{mailto:fanelli@cemfi.es}{fanelli@cemfi.es} &
  \small \href{mailto:nezih.guner@cemfi.es}{nezih.guner@cemfi.es} &
  \small \href{mailto:pijoan@cemfi.es}{pijoan@cemfi.es}\\
\end{tabular*}

\cvsection{Research Interests}
\cvtext{Macroeconomics, International Trade}

\cvsection{Research}
\cvtext{\textbf{``The Demographic Origins of Premature Deindustrialization''}.}
\vspace{0.75em}
\cvtext{\textbf{``Tariffs as Taxes on Capital,''} \textit{with Rubén Domínguez-Díaz, José-Elías Gallegos and Javier Quintana}.}
\vspace{0.75em}
\cvtext{\textbf{``Trade, Financial Frictions, and the Missing Manufacturing Window''} \textit{with Santiago Etchegaray.}}
\vspace{0.75em}
\cvtext{\textbf{``IMF Governance in a Fragmenting World''} \textit{with Mart\'{\i}n Gonzalez-Eiras.}}
\vspace{0.75em}
\cvtext{\textbf{``The Global Reach of EU Regulation: Evidence from Third-Country Trade''}} 

\cvsection{Professional Experience}
\cvline{\textbf{Bruegel} (Brussels think tank), Research Analyst}{2019--2021}
\vspace{- 15 pt}
\begin{itemize}
    \item[--] Processing and carrying out statistical analysis of economic data to provide an insight for policy formulation.
    \item[--] Working on research papers and analytical reports on macroeconomics, international trade and capital flows (see pre-PhD Policy Publications below).
\end{itemize}
\cvline{\textbf{Citigroup London}, Quantitative Investment Strategies (Markets), Analyst}{2018--2019}
\vspace{- 15 pt}
\begin{itemize}
    \item[--] Develop and price bespoke instruments largely composed of EM rates products for specific client needs.
    \item[--] Analyse economic data, forecast likely market movements from different scenarios centred around key events. 
\end{itemize}

\cvsection{Research Assistance Experience}
\cvline{\textbf{CEMFI}, Research Assistant for Professor Sebastian Fanelli.}{2023--2025}\\
\cvline{\textbf{CEMFI}, Summer Research Assistant for Professor Josep Pijoan-Mas.}{2022}

\cvsection{Teaching}
\cvline{\textbf{Macroeconomics I (graduate)}}{2023, 2024, 2025}
\cvsubline{TA to Federico Kochen (2023) and Josep Pijoan-Mas (2024, 2025).}{CEMFI}\\

\cvline{\textbf{Country Report and Risk Assessment course (undergraduate)}}{2022, 2023, 2024}
\cvsubline{Guest lecturer (sessions on economic and financial risk).}{UC3M}\\

\cvline{\textbf{La Unión Europea hoy (online diploma)}}{2023, 2024}
\cvsubline{Guest lecturer (sessions on Economic and Monetary Union).}{Universidad de Concepción (Chile)}\\

\cvsection{Conferences and Seminars}
\cvline{RCEA International Conference in Economics, Econometrics, and Finance}{2026}\\
\cvline{XXIX Workshop on Dynamic Macroeconomics, Vigo}{2026}\\
\cvline{RES (Royal Economic Society) Annual Conference (forthcoming)}{2026}\\
\cvline{41st Annual Congress of the EEA (European Economic Association) (forthcoming)}{2026}\\
\cvline{IMF-OECD-PIIE-WB Conference on Labor Markets, AI, and Demography (forthcoming)}{2026}\\
\cvline{49th SAEe (Simposio de la Asociaci\'on Espa\~nola de Econom\'ia)}{2024}

\cvsection{Activities}
\cvline{\textbf{CEMFI Student Representative}, PhD Students}{2024--present}\\
\cvline{\textbf{CEMFI PhD Quality Committee}, member}{2024--present}

\cvsection{Scholarships and Awards}
\cvline{\textbf{María de Maeztu}, Unit of Excellence Research Grant}{2022}
\cvsubline{CEX2020-001104-M}{}\\

\cvline{\textbf{Fundación Ramón Areces}, Grant}{2023}

\cvline{\textbf{"la Caixa" Foundation}, Doctoral Fellowship INPhINIT Retaining}{2023-present}
\cvsubline{ID 100010434 and fellowship code LCF/BQ/DR23/12000010}{}\\

\cvsection{Pre-PhD Policy Publications}

\cvtext{\textbf{Book}}
\vspace{0.9 em}
\cvline{\textbf{¿Quién hablará en europeo? El desafío de construir una unión política sin lengua común}
(English: \textbf{Who will speak European? The challenge of building a political union without a common tongue}),
Clave Intelectual, Madrid, \textit{with Arman Basurto}. \href{https://claveintelectual.com/product/quien-hablara-en-europeo/}{link}}{2021}\\
%\cvtext{\textbf{Peer-reviewed article}}
%\vspace{0.7 em}
%\cvline{\textbf{An analysis of EU FDI inflow into Russia,} \textit{N.\ Poitiers}. \textit{Russian Journal of Economics} 6(2): 144--165
%\href{https://rujec.org/article/55880/}{https://rujec.org/article/55880/}}{2020}\\

\vspace{-0.5 em}
\cvtext{\textbf{Papers}}
\vspace{0.9 em}
\cvline{\textbf{``Reviving the case for policy coordination in EMU'',} in Adamski, Amtenbrink, \& de Haan (Eds.),
The Cambridge Handbook of European Monetary, Economic and Financial Integration,
\textit{with M.\ Demertzis and N.\ Viegi}. \href{https://www.cambridge.org/core/books/abs/cambridge-handbook-of-european-monetary-economic-and-financial-integration/reviving-the-case-for-policy-coordination-in-emu/6977BAE378BE554F403666EB4153D331}{link}}{2023}\\

\cvline{\textbf{``Accounting for climate policies in Europe's sovereign debt market'',}
\textit{Bruegel} Policy Contribution Issue 10, \textit{with A.\ Lehmann}. \href{https://www.bruegel.org/policy-brief/accounting-climate-policies-europes-sovereign-debt-market}{link}}{2021}\\

\cvline{\textbf{``Europe should not neglect its Capital Markets Union'',}
\textit{Bruegel} Policy Contribution Issue 13, \textit{with M.\ Demertzis and L.\ Guetta-Jeanrenaud}. \href{https://www.bruegel.org/policy-brief/europe-should-not-neglect-its-capital-markets-union}{link}}{2021}\\

\cvline{\textbf{``Economic Crisis in the Middle East and North Africa'',}
\textit{Bruegel} Policy Contribution Issue 2, \textit{with M.\ Dabrowski}. \href{https://www.bruegel.org/policy-brief/economic-crisis-middle-east-and-north-africa}{link}}{2021}\\

\cvline{\textbf{``The financial fragility of European households in the time of COVID-19'',}
\textit{Bruegel} Policy Contribution Issue 15, \textit{with M.\ Demertzis and A.\ Lusardi}. \href{https://www.bruegel.org/policy-brief/financial-fragility-european-households-time-covid-19}{link}}{2020}\\

\cvline{\textbf{``Analysis of developments in EU capital flows in the global context''} (6th edition),
European Commission DG FISMA, \textit{with G.\ Claeys, M.\ Demertzis, K.\ Efstathiou and T.\ Linta}.
\href{https://www.bruegel.org/sites/default/files/wp-content/uploads/2020/03/Analysis-of-development-in-EU-capital-flows-in-the-global-context-Bruegel.pdf}{link}}{2020}\\

\cvline{\textbf{``Times of Economic Crisis in the MENA Region'',} in \textit{Med Report 2020},
\textit{with M.\ Dabrowski}.
\href{https://www.ispionline.it/en/pubblicazione/navigating-pandemic-challenge-stability-and-prosperity-mediterranean-28422}{link}}{2020}\\

\cvline{\textbf{``Six years after Ukraine's Euromaidan: reforms and challenges ahead'',}
\textit{Bruegel} Policy Contribution Issue 14,
\textit{with M.\ Dabrowski and G.\ Zachmann}. \href{https://www.bruegel.org/policy-brief/six-years-after-ukraines-euromaidan-reforms-and-challenges-ahead}{link}}{2020}\\

\cvline{\textbf{``Monetary policy in the time of COVID-19, or how uncertainty is here to stay'',}
European Parliament (ECON Monetary Dialogue, November), \textit{with M.\ Demertzis}.
\href{https://www.europarl.europa.eu/cmsdata/214970/02.BRUEGEL_final.pdf}{link}}{2020}\\

\cvline{\textbf{``How Can the European Parliament Better Oversee the ECB?''}
European Parliament (ECON Monetary Dialogue, September), \textit{with G.\ Claeys}.
\href{https://www.europarl.europa.eu/cmsdata/211436/1_BRUEGEL-final.pdf}{link}}{2020}\\

\cvline{\textbf{``From Climate Change to Cyber-attacks: Incipient Financial Stability Risks for the Euro Area'',}
European Parliament (ECON Monetary Dialogue, February), \textit{with Z.\ Darvas and G.\ B.\ Wolff}.
\href{https://www.europarl.europa.eu/cmsdata/195426/Bruegel_final_original.pdf}{link}}{2020}\\

\cvline{\textbf{``FDI another day: Russian reliance on European investment'',}
\textit{Bruegel} Policy Contribution Issue 3, \textit{with N.\ Poitiers}. \href{https://www.bruegel.org/policy-brief/fdi-another-day-russian-reliance-european-investment}{link}}{2020}\\

\cvline{\textbf{``The state of China--European Union economic relations'',}
\textit{Bruegel} Working Paper Issue 9, \textit{with U.\ Dadush and T.\ Gao}. \href{https://www.bruegel.org/sites/default/files/wp-content/uploads/2019/11/WP-2019-09-China-final.pdf}{link}}{2019}

\cvsection{Other}
\cvtext{\textbf{Citizenship}: Spanish}
\vspace{0.9em}
\cvtext{\textbf{Languages}: Spanish (native), English (fluent), German (proficient, C1), French (proficient, C1)}

\vfill
\begin{center}
  \small\textit{Last updated: May 2026}
\end{center}

\end{document}
