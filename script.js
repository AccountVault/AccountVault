document.addEventListener("DOMContentLoaded", function () {
    const terms = [
        {
            word: 'Cash',
            typeOfAccount: 'Asset',
            definition: 'Cash represents physical currency and balances in bank accounts that are readily available for immediate use, crucial for meeting short-term financial obligations.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash on Hand',
            typeOfAccount: 'Asset',
            definition: 'This account refers to the amount of physical currency (coins and bills) that a business has readily available for immediate use in its operations.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash Local Treasury',
            typeOfAccount: 'Asset',
            definition: 'This account is used to record in the book of barangays the amount of cash in the Local Treasury.',
            normalBalance: 'Debit'
        },
        {
            word: 'Petty Cash',
            typeOfAccount: 'Asset',
            definition: 'Amount of cash granted to designated Petty Cash Custodian for payment of authorized petty or miscellaneous expenses which cannot be conveniently paid thru check.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash in Bank - Local Currency',
            typeOfAccount: 'Asset',
            definition: 'This account refers to the amount of money that a business holds in its bank accounts in the local currency.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash in Bank - Local Currency, Current Account',
            typeOfAccount: 'Asset',
            definition: 'Cash in local currency deposited in current account with Authorized Government Depository Banks.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash in Bank - Local Currency, Savings Account',
            typeOfAccount: 'Asset',
            definition: 'Cash in local currency deposited in savings account with Authorized Government Depository Banks.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash in Bank - Foreign Currency',
            typeOfAccount: 'Asset',
            definition: 'This account represents cash balances denominated in foreign currencies, which are held in bank accounts and are available for use in transactions or for investment purposes.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash in Bank - Foreign Currency, Current Account',
            typeOfAccount: 'Asset',
            definition: 'Cash in foreign currency deposited in current account with Authorized Government Depository Banks.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash in Bank - Foreign Currency, Savings Account',
            typeOfAccount: 'Asset',
            definition: 'Cash in foreign currency deposited in savings account with Authorized Government Depository Banks.',
            normalBalance: 'Debit'
        },
        {
            word: 'Investments',
            typeOfAccount: 'Asset',
            definition: 'This is an asset or item acquired with the goal of generating income or appreciation. Appreciation refers to an increase in the value of an asset over time. When an individual purchases a good as an investment, the intent is not to consume the good but rather to use it in the future to create wealth.',
            normalBalance: 'Debit'
        },
        {
            word: 'Investments in Time Deposits',
            typeOfAccount: 'Asset',
            definition: 'This account is used to record placement in local currency with Authorized Government Depository Banks of excess cash or cash not earmarked for immediate use for a specified period.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash in Bank - Local Currency, Time Deposits',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize authorized placements of cash in local currency with Authorized Government Depository Banks for a specific period of time. Credit this account for withdrawal of placements.',
            normalBalance: 'Debit'
        },
        {
            word: 'Cash in Bank - Foreign Currency, Time Deposits',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize placements of cash in foreign currency with Authorized Government Depository Banks for a specific period of time. Credit this account for withdrawal of placements.',
            normalBalance: 'Debit'
        },
        {
            word: 'Treasury Bills',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize amounts placed in a 90-day and below treasury bills issued by the National Government thru the BTr. Credit this account when the rights to the cash flows have expired or transferred to another party thru resale or other disposition.',
            normalBalance: 'Debit'
        },
        {
            word: 'Financial Assets at Fair Value Through Surplus or Deficit',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize financial assets that, upon initial recognition, are designated by the entity as at fair value through profit or loss. This shall comprise of both debt and equity securities and shall be accounted for in the same manner as held for trading securities. Credit this account when the rights to the cash flows have expired or transferred to another party thru resale or other disposition.',
            normalBalance: 'Debit'
        },
        {
            word: 'Financial Assets Held for Trading',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize debt and equity securities that are: (a) acquired principally for the purpose of selling or repurchasing them in the near term; or (b) part of a portfolio of identified securities that are managed together and for which there is evidence of a recent actual pattern of short-term profit-taking.',
            normalBalance: 'Debit'
        },
        {
            word: 'Financial Assets Designated at Fair Value Through Surplus or Deficit',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize financial assets that, upon initial recognition, are designated by the entity as at fair value through surplus/profit or deficit/loss.',
            normalBalance: 'Debit'
        },
        {
            word: 'Financial Assets - Held to Maturity',
            typeOfAccount: 'Asset',
            definition: 'These are non-derivative assets with fixed or determinable payments and fixed maturities which the Group intends to hold to maturity (e.g. subscribed bonds). The intention and ability to hold the security to maturity has to be evaluated on initial recognition and confirmed at the end of each reporting period.',
            normalBalance: 'Debit'
        },
        {
            word: 'Investments in Treasury Bills - Local',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize money invested in treasury bills with 91 days and above maturity issued in the local stock market.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - Investments in Treasury Bills - Local',
            typeOfAccount: 'Asset',
            definition: 'This account is credited when there is objective evidence that the investments in local treasury bills are impaired.',
            normalBalance: 'Credit'
        },
        {
            word: 'Investments in Bonds-Local',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize investments in bonds issued by the BTr and other local investees.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - Investments in Bonds - Local',
            typeOfAccount: 'Asset',
            definition: 'This account is credited when there is objective evidence that the investments in local bonds are impaired.',
            normalBalance: 'Credit'
        },
        {
            word: 'Financial Assets - Available for Sale',
            typeOfAccount: 'Asset',
            definition: 'This is a residual category represented by non-derivative financial assets that are designated as available for sale and which have not been assigned to one of the previous categories. “Available-for-sale financial assets” are recorded at their fair value including related purchase costs. They are classified as non-current assets, unless management intends to dispose of them within 12 months from the end of the reporting period.',
            normalBalance: 'Debit'
        },
        {
            word: 'Investments in Stocks',
            typeOfAccount: 'Asset',
            definition: 'Amount of authorized investments in stocks.',
            normalBalance: 'Debit'
        },
        {
            word: 'Investments in Bonds',
            typeOfAccount: 'Asset',
            definition: 'Amount of authorized investments in bonds.',
            normalBalance: 'Debit'
        },
        {
            word: 'Financial Assets - Others',
            typeOfAccount: 'Asset',
            definition: 'This account refers to various financial instruments such as investments in private companies, derivative financial instruments, and other debt instruments.',
            normalBalance: 'Debit'
        },
        {
            word: 'Deposits on Letters of Credit',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize the amount paid by the government corporation to the bank for opening letters of credit.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - Deposits in Letters of Credit',
            typeOfAccount: 'Asset',
            definition: 'It represents the estimated portion of deposits made by a company in letters of credit that may not be recoverable, typically due to the risk of default by the counterparty or other factors.',
            normalBalance: 'Credit'
        },
        {
            word: 'Guaranty Deposits',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize amount deposited for goods such as deposit for containers and deposits made to guarantee compliance with the terms of an agreement.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - Guaranty Deposits',
            typeOfAccount: 'Asset',
            definition: 'It represents the estimated portion of guaranty deposits that may not be recoverable, typically due to the risk of default by the counterparty or other factors.',
            normalBalance: 'Credit'
        },
        {
            word: 'Other Investments',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize the amount of other investments which cannot be classified under any of the specific investment accounts.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - Other Investments',
            typeOfAccount: 'Asset',
            definition: 'This account is credited to reduce the cost/amortized cost/fair value of other investments due to impairment.',
            normalBalance: 'Credit'
        },
        {
            word: 'Investments in Joint Venture',
            typeOfAccount: 'Asset',
            definition: 'It represent equity investments in entities over which a company has joint control, typically exercised through contractual arrangements, where the company has significant influence but does not have control over the financial and operating policies.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - Investments in Joint Venture',
            typeOfAccount: 'Asset',
            definition: 'This account is credited to reduce the cost/amortized cost/fair value of investments due to impairment.',
            normalBalance: 'Credit'
        },
        {
            word: 'Sinking Fund',
            typeOfAccount: 'Asset',
            definition: 'This is a type of fund that is created and set up purposely for repaying debt. The owner of the account sets aside a certain amount of money regularly and uses it only for a specific purpose.',
            normalBalance: 'Debit'
        },
        {
            word: 'Receivables',
            typeOfAccount: 'Asset',
            definition: 'Receivables, also regarded as accounts receivable, are debts owed to a firm by its customers for goods or services used or delivered but not yet paid for.',
            normalBalance: 'Debit'
        },
        {
            word: 'Loans and Receivable Accounts',
            typeOfAccount: 'Asset',
            definition: 'This represent amounts due to a company from loans made to customers, suppliers, employees, or other parties, typically recorded as assets on the balance sheet.',
            normalBalance: 'Debit'
        },
        {
            word: 'Accounts Receivable',
            typeOfAccount: 'Asset',
            definition: 'Amount due from customers arising from services rendered, trading/business transactions or sale of merchandise or property.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - Accounts Receivable',
            typeOfAccount: 'Asset',
            definition: 'This account is credited upon recognition of impairment which may arise from non-collection.',
            normalBalance: 'Credit'
        },
        {
            word: 'Real Property Tax Receivable',
            typeOfAccount: 'Asset',
            definition: 'Amount of basic real property tax due from real property owners.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - RPT Receivable',
            typeOfAccount: 'Asset',
            definition: 'It represents the estimated portion of real property tax receivable that may not be collectible, typically due to financial difficulties or other factors.',
            normalBalance: 'Credit'
        },
        {
            word: 'Special Education Tax Receivable',
            typeOfAccount: 'Asset',
            definition: 'Amount of additional levy on real property tax due from real property owners for the Special Education Fund.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - SET Receivable',
            typeOfAccount: 'Asset',
            definition: 'It represents the estimated portion of special education tax receivable that may not be collectible, typically due to financial difficulties or other factors.',
            normalBalance: 'Credit'
        },
        {
            word: 'Notes Receivable',
            typeOfAccount: 'Asset',
            definition: 'This account is used to recognize claims expected to be received at a future date, usually with interest, for which a formal instrument of credit is used as evidence of debt, such as promissory notes, time drafts or trade acceptances or other negotiable financial instruments acquired from debtors.',
            normalBalance: 'Debit'
        },
        {
            word: 'Allowance for Impairment - Notes Receivable',
            typeOfAccount: 'Asset',
            definition: 'This account is credited upon recognition of the amount to reduce the amortized cost of notes receivable due to impairment, which may arise from non-collection.',
            normalBalance: 'Credit'
        },
        {
            word: 'Loans Receivable - Government-Owned and/or Controlled Corporations',
            typeOfAccount: 'Asset',
            definition: 'Amount of loans due from Government-Owned and/or Controlled Corporations (GOCCs).',
            normalBalance: 'Debit'
        },
        {
            word: "Allowance for Impairment - Loans Receivable - Government-Owned and/or Controlled Corporations",
            typeOfAccount: "Asset",
            definition: "It represents the estimated portion of loans receivable from government-owned and/or controlled corporations that may not be collectible, typically due to financial difficulties or other factors.",
            normalBalance: "Credit"
        },
        {
            word: "Loans Receivable - Local Government Units",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize amounts of credit extended to local government units covered by loan agreements.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Loans Receivable - Local Government Units",
            typeOfAccount: "Asset",
            definition: "This account is credited upon set-up of provision for losses which may arise from the non-collection of loans receivable from local government units.",
            normalBalance: "Credit"
        },
        {
            word: "Interests Receivable",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize amounts of accrued interests on advances, investments, and loans and receivables.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Interests Receivable",
            typeOfAccount: "Asset",
            definition: "This account is credited upon set-up of provision for losses which may arise from the non-collection of interests receivable.",
            normalBalance: "Credit"
        },
        {
            word: "Dividends Receivable",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the amount of cash dividends earned but not yet received on shares of stocks owned by the government corporations that are held as Held for Trading, Designated at Fair Value through Surplus/Profit or Deficit/Loss, Available for Sale and other investments.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Dividends Receivable",
            typeOfAccount: "Asset",
            definition: "This account is credited to reduce the amortized cost of dividends receivable due to impairment, which may arise from non-collection of the receivables.",
            normalBalance: "Credit"
        },
        {
            word: "Loans Receivable - Others",
            typeOfAccount: "Asset",
            definition: "Amount of loans due from entities other than GOCCs and LGUs",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Loans Receivable - Others",
            typeOfAccount: "Asset",
            definition: "",
            normalBalance: "Credit"
        },
        {
            word: "Lease Receivables",
            typeOfAccount: "Asset",
            definition: "It represent amounts due to a company from leasing agreements, where the company is the lessor and earns rental income from leasing out assets such as property, equipment, or vehicles to lessees.",
            normalBalance: "Debit"
        },
        {
            word: "Operating Lease Receivable",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the accrual of rental income from lease of assets.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Operating Lease Receivable",
            typeOfAccount: "Asset",
            definition: "This account is credited upon set-up of provision for losses which may arise from the non-collection of the operating lease receivables.",
            normalBalance: "Credit"
        },
        {
            word: "Finance Lease Receivable",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the amount due from sale of government property on installment basis.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Finance Lease Receivable",
            typeOfAccount: "Asset",
            definition: "This account is credited upon set-up of provision for losses which may arise from the non-collection of finance lease receivable.",
            normalBalance: "Credit"
        },
        {
            word: "Inter-Agency Receivables",
            typeOfAccount: "Asset",
            definition: "It represent amounts due to a government agency from other government agencies for goods or services provided, typically recorded as assets on the balance sheet until payment is received.",
            normalBalance: "Debit"
        },
        {
            word: "Due from National Government Agencies",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize advances for purchase of goods/services as authorized by law, fund transfers to the National Government Agencies (NGAs) for implementation of projects and other receivables from NGAs.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Due from National Government Agencies",
            typeOfAccount: "Asset",
            definition: "It represents the estimated portion of receivables from national government agencies that may not be collectible, typically due to financial difficulties or other factors.",
            normalBalance: "Credit"
        },
        {
            word: "Due from Government-Owned and/or Controlled Corporations",
            typeOfAccount: "Asset",
            definition: "It represents the estimated portion of receivables from government-owned and controlled corporations (GOCCs) that may not be collectible, typically due to financial difficulties or other factors.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Due from GOCCs",
            typeOfAccount: "Asset",
            definition: "It represents the estimated portion of receivables from government-owned and controlled corporations (GOCCs) that may not be collectible, typically due to financial difficulties or other factors.",
            normalBalance: "Credit"
        },
        {
            word: "Due from Local Government Units",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize amount of advances for purchase of goods/services as authorized by law, fund transfers to the Local Government Units (LGUs) for implementation of projects, share from LGUs income and other receivables.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Due from LGUs",
            typeOfAccount: "Asset",
            definition: "It represents the estimated portion of receivables from local government units (LGUs) that may not be collectible, typically due to financial difficulties or other factors.",
            normalBalance: "Credit"
        },
        {
            word: "Due from Joint Venture",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize receivables from joint venture pertaining to obligations paid in advance for share in income of joint ventures, expenses paid in advance for joint ventures, etc.Credit this account for receipt of share in income from, liquidation of advances to, or transfers of shares from joint ventures.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Due from Joint Venture",
            typeOfAccount: "Asset",
            definition: "It represents the estimated portion of receivables from joint ventures that may not be collectible, typically due to financial difficulties or other factors.",
            normalBalance: "Credit"
        },
        {
            word: "Intra-Agency Receivables",
            typeOfAccount: "Asset",
            definition: "It represent amounts owed by one department or division within a government agency to another department or division for goods or services provided, typically recorded as assets on the balance sheet until payment is received.",
            normalBalance: "Debit"
        },
        {
            word: "Due from Other Funds",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize transfers from one fund to another fund maintained within the corporation as legally authorized.",
            normalBalance: "Debit"
        },
        {
            word: "Due from Special Accounts",
            typeOfAccount: "Asset",
            definition: "It represents amounts owed to a government agency from special accounts or funds for specific purposes, typically earmarked for particular projects, activities, or obligations.",
            normalBalance: "Debit"
        },
        {
            word: "Due from Local Economic Enterprise",
            typeOfAccount: "Asset",
            definition: "It represents amounts owed to a government agency from local businesses or enterprises for goods or services provided, typically recorded as assets on the balance sheet until payment is received.",
            normalBalance: "Debit"
        },
        {
            word: "Advances",
            typeOfAccount: "Asset",
            definition: "It represent amounts paid by a company to suppliers, employees, or others for goods or services that have not yet been received or provided, typically recorded as assets on the balance sheet until the goods are received or the services are rendered.",
            normalBalance: "Debit"
        },
        {
            word: "Advances for Operating Expenses",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the amount of advances granted to accountable officers for payment of operating expenses of operating/field units not maintaining complete set of books of accounts.",
            normalBalance: "Debit"
        },
        {
            word: "Advances for Payroll",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the amount granted to regular disbursing officer for payment of salaries, wages, honoraria, allowances and other personnel benefits.",
            normalBalance: "Debit"
        },
        {
            word: "Advances to Special Disbursing Officer",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the amount granted to government corporation’s accountable officers and employees for special purpose/time-bound undertakings to be liquidated within a specified period.",
            normalBalance: "Debit"
        },
        {
            word: "Advances for Officers and Employees",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize amount advanced to officers and employees for official travel.",
            normalBalance: "Debit"
        },
        {
            word: "Other Receivables",
            typeOfAccount: "Asset",
            definition: "It represent amounts owed to a company that are not classified as accounts receivable, such as loans to employees, advances to suppliers, deposits, or other miscellaneous receivables.",
            normalBalance: "Debit"
        },
        {
            word: "Receivables - Disallowances/Charges",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the amount of disallowances/charges in audit due from public/private individuals/entities which have become final and executory.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Receivables- Disallowances/Charges",
            typeOfAccount: "Asset",
            definition: "It represents the estimated portion of receivables that may not be collectible, specifically related to disallowed charges or expenses, typically due to disputes, errors, or other factors.",
            normalBalance: "Credit"
        },
        {
            word: "Due from Officers and Employees",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize amount of claims from entity's officers and employees for overpayment (not covered by ND), cash shortage, loss of assets and other bills issued by the entity and losses in excess of allowable variance between books and volumetric count of merchandise inventory.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Due from Officers and Employees",
            typeOfAccount: "Asset",
            definition: "It represents the estimated portion of receivables from company officers and employees that may not be collectible, typically due to financial difficulties or other factors.",
            normalBalance: "Credit"
        },
        {
            word: "Due from Non-Government Organizations/People's Organizations",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize amount of advances granted to Non-Government Organizations (NGOs)/People’s Organizations (POs) for implementation of specific projects.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Due from Non-Government Organizations/People's Organizations",
            typeOfAccount: "Asset",
            definition: "It represents the estimated portion of receivables from non-government organizations or people's organizations that may not be collectible, typically due to financial difficulties or other factors.",
            normalBalance: "Credit"
        },
        {
            word: "Other Receivables -",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize amount due from debtors and other entities not falling under any of the specific receivable account.",
            normalBalance: "Debit"
        },
        {
            word: "Allowance for Impairment - Other Receivables",
            typeOfAccount: "Asset",
            definition: "This account is credited to reduce the cost/amortized cost/fair value of other receivables due to impairment.",
            normalBalance: "Credit"
        },
        {
            word: "Inventories",
            typeOfAccount: "Asset",
            definition: "It represent assets held by a company for sale in the ordinary course of business, including raw materials, work in progress, and finished goods.",
            normalBalance: "Debit"
        },
        {
            word: "Inventory Held for Sale",
            typeOfAccount: "Asset",
            definition: "It represents finished goods held by a company for sale to customers, including merchandise inventory for retail businesses or manufactured goods ready for sale.",
            normalBalance: "Debit"
        },
        {
            word: "Merchandise Inventory",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of goods purchased/acquired/produced which are intended for sale in the ordinary course of business as well as share in the reclaimed land with proponents, land and other items that are intended for sale.",
            normalBalance: "Debit"
        },
        {
            word: "Inventory Held for Distribution",
            typeOfAccount: "Asset",
            definition: "It represents finished goods held by a company for sale to customers or distribution to retailers, wholesalers, or other intermediaries.",
            normalBalance: "Debit"
        },
        {
            word: "Food Supplies for Distribution",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of food for distribution to hospital/rehabilitation patients, jail inmates and the like.",
            normalBalance: "Debit"
        },
        {
            word: "Welfare Goods for Distribution",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of goods for distribution to people affected by calamities/disasters/ground conflicts such as canned goods, noodles, mosquito nets, blankets, mats, kitchen utensils, flashlights and other similar items.",
            normalBalance: "Debit"
        },
        {
            word: "Drugs and Medicines for Distribution",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of drugs and medicines purchased/received for distribution.",
            normalBalance: "Debit"
        },
        {
            word: "Medical, Dental and Laboratory Supplies for Distribution",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of medical, dental and laboratory supplies purchased/received for distribution.",
            normalBalance: "Debit"
        },
        {
            word: "Agricultural and Marine Supplies for Distribution",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of fertilizers, pesticides and other marine and agricultural supplies for distribution. This includes supplies for aquaculture researches, environment protection/preservations and the like.",
            normalBalance: "Debit"
        },
        {
            word: "Agricultural Produce for Distribution",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of agricultural produce for distribution. This includes livestock and poultry; crops and fruits; and other agricultural products, supplies for aquaculture researches, environment protection/preservation and the like.",
            normalBalance: "Debit"
        },
        {
            word: "Textbooks and Instructional Materials for Distribution",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of textbooks and instructional materials including flipcharts, video clips/slides, and the like, purchased/received for distribution.",
            normalBalance: "Debit"
        },
        {
            word: "Construction Materials for Distribution",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of construction materials for distribution.",
            normalBalance: "Debit"
        },
        {
            word: "Property and Equipment for Distribution",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of property and equipment purchased/received for distribution.",
            normalBalance: "Debit"
        },
        {
            word: "Other Supplies and Materials for Distribution",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of purchased/acquired inventories not falling under any of the specific inventory accounts held for distribution.",
            normalBalance: "Debit"
        },
        {
            word: "Inventory Held for Manufacturing",
            typeOfAccount: "Asset",
            definition: "It represents raw materials, work in progress, and finished goods held by a company for use in its manufacturing process.",
            normalBalance: "Debit"
        },
        {
            word: "Raw Materials Inventory",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of unprocessed materials that serve as component of produced goods.",
            normalBalance: "Debit"
        },
        {
            word: "Work-in-Process Inventory",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize cost of goods still in the process of being manufactured or fabricated to produce an end product.",
            normalBalance: "Debit"
        },
        {
            word: "Finished Goods Inventory",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize cost of completed/manufactured product available for sale or use.",
            normalBalance: "Debit"
        },
        {
            word: "Inventory Held for Consumption",
            typeOfAccount: "Asset",
            definition: "It represents goods held by a company for internal use in its operations, rather than for sale to customers.",
            normalBalance: "Debit"
        },
        {
            word: "Office Supplies Inventory",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost or value of purchased/acquired office supplies such as bond papers, inks, and small tangible items like staple wire removers, punchers, staplers and other similar items for government operations.",
            normalBalance: "Debit"
        },
        {
            word: "Accountable Forms, Plates and Stickers",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize cost of accountable forms, with or without money value, acquired for government operations.",
            normalBalance: "Debit"
        },
        {
            word: "Non-Accountable Forms Inventory",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of non-accountable forms such as pre-printed application forms, tax returns forms, accounting forms and the like.",
            normalBalance: "Debit"
        },
        {
            word: "Animal/Zoological Supplies Inventory",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of food, medicines, veterinary and other maintenance needs of animals for use/consumption of government parks, zoos, wildlife sanctuaries and botanical gardens.",
            normalBalance: "Debit"
        },
        {
            word: "Food Supplies Inventory",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize cost of food for hospital/rehabilitation patients and the like.",
            normalBalance: "Debit"
        },
        {
            word: "Drugs and Medicines Inventory",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of drugs and medicines purchased/received for government operations.",
            normalBalance: "Debit"
        },
        {
            word: "Medical, Dental and Laboratory Supplies Inventory",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of medical, dental and laboratory supplies purchased/received for government operations.",
            normalBalance: "Debit"
        },
        {
            word: "Fuel, Oil and Lubricants Inventory",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of fuel and oil in government depots, lubricants and other oil products for use in government vehicles and other equipment in connection with government operations/projects.",
            normalBalance: "Debit"
        },
        {
            word: "Agricultural and Marine Supplies Inventory",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of fertilizers, pesticides and other marine and agricultural supplies for use in government operations.",
            normalBalance: "Debit"
        },
        {
            word: "Textbooks and Instructional Materials Inventory",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of textbooks and instructional materials including flipcharts, video clips/slides, and the like, purchased/received for use in government schools operation.",
            normalBalance: "Debit"
        },
        {
            word: "Military, Police and Traffic Supplies Inventory",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of military, police and traffic supplies acquired for government operations",
            normalBalance: "Debit"
        },
        {
            word: "Chemical and Filtering Supplies Inventory",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize cost of chemical, water treatment, filtering supplies and the like used in government operations.",
            normalBalance: "Debit"
        },
        {
            word: "Construction Materials Inventory",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of construction materials purchased/acquired for stock and later issuance for the construction, fabrication, repair and rehabilitation of government facilities undertaken by administration.",
            normalBalance: "Debit"
        },
        {
            word: "Other Supplies and Materials Inventory",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of purchased/acquired supplies and materials not falling under any of the specific inventory accounts held for consumption.",
            normalBalance: "Debit"
        },
        {
            word: "Prepayments and Deferred Charges",
            typeOfAccount: "Asset",
            definition: "It represent advance payments made by a company for goods or services that have not yet been received or expenses that will benefit future periods, typically recorded as assets on the balance sheet until the goods are received, the services are rendered, or the expenses are incurred.",
            normalBalance: "Debit"
        },
        {
            word: "Prepayments",
            typeOfAccount: "Asset",
            definition: "It represent advance payments made by a company for goods or services that have not yet been received, typically recorded as assets on the balance sheet until the goods are received or the services are rendered.",
            normalBalance: "Debit"
        },
        {
            word: "Advances to Contractors",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize amount advanced to contractors as authorized by law.",
            normalBalance: "Debit"
        },
        {
            word: "Prepaid Rent",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the amount advanced/deposited for leases/rentals of property, plant and equipment used in government operations.",
            normalBalance: "Debit"
        },
        {
            word: "Prepaid Registration",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the amount advanced for registration of government property.",
            normalBalance: "Debit"
        },
        {
            word: "Prepaid Interest",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the amount advanced for interest of loans contracted by the government.",
            normalBalance: "Debit"
        },
        {
            word: "Prepaid Insurance",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the amount advanced for the insurance of government property.",
            normalBalance: "Debit"
        },
        {
            word: "Other Prepayments",
            typeOfAccount: "Asset",
            definition: "Amount of other expenses which were paid for but remain unconsumed/ unutilized at the end of the accounting period.",
            normalBalance: "Debit"
        },
        {
            word: "Deferred Charges",
            typeOfAccount: "Asset",
            definition: "It represents a reduction in the amount owed by a customer or client for making early or upfront payments for goods or services, typically recorded as a liability until the goods are delivered or the services are rendered.",
            normalBalance: "Debit"
        },
        {
            word: "Discount on Advance Payments",
            typeOfAccount: "Asset",
            definition: "It represents real estate held by a company for the purpose of earning rental income, capital appreciation, or both, rather than for use in its own operations or for resale.",
            normalBalance: "Credit"
        },
        {
            word: "Investment Property",
            typeOfAccount: "Asset",
            definition: "It represent tangible assets used by a company in its operations, including land and the buildings erected on it, which are not intended for resale and are expected to be used over the long term.",
            normalBalance: "Debit"
        },
        {
            word: "Land and Buildings",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of land or part of a land held by the owner (or by the lessee under a finance lease) to earn rentals or for capital appreciation or both.",
            normalBalance: "Debit"
        },
        {
            word: "Investment Property, Land",
            typeOfAccount: "Asset",
            definition: "This account is credited for the loss in the future economic benefits or service potential of the investment property.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses - Investment Property, Land",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the amount recognized to reduce land to its recoverable amount due to impairment.",
            normalBalance: "Debit"
        },
        {
            word: "Investment Property, Buildings",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost of building or part of a building held by the owner (or by the lessee under a finance lease) to earn rentals or for capital appreciation or both.",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Depreciation - Investment Property, Buildings",
            typeOfAccount: "Asset",
            definition: "This account is credited for the allocation of cost of building held as investment property in accordance with the prescribed policy on depreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses - Investment Property, Buildings",
            typeOfAccount: "Asset",
            definition: "This account is credited forth loss in the future economic benefits or service potential of the investment property, over and above depreciation, which is equivalent to the excess of the carrying amount of the asset over its recoverable service amount.",
            normalBalance: "Credit"
        },
        {
            word: "Construction in Progress - Investment Property, Buildings",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the accumulated cost or other appropriate value of investment property-buildings which are still in the process of construction or development.",
            normalBalance: "Debit"
        },
        {
            word: "Property, Plant and Equipment",
            typeOfAccount: "Asset",
            definition: "It represent tangible assets used by a company in its operations, including land, buildings, machinery, vehicles, and other equipment, which are not intended for resale and are expected to be used over the long term.",
            normalBalance: "Debit"
        },
        {
            word: "Land",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the purchase/reclamation or fair value if acquired through donation or transfers without cost of land.",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Impairment Losses - Land",
            typeOfAccount: "Asset",
            definition: "This account is credited for the amount recognized to reduce land to its recoverable amount due to impairment.",
            normalBalance: "Credit"
        },
        {
            word: "Land Improvements",
            typeOfAccount: "Asset",
            definition: "It represent enhancements made to land to make it more suitable for its intended use, including landscaping, paving, fencing, and other improvements that increase the land's utility and value.",
            normalBalance: "Debit"
        },
        {
            word: "Land Improvements, Aquaculture Structures",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the purchase or fair value, if acquired through donation or transfers without cost, of fishery and marine structures.",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Depreciation - Land Improvements, Aquaculture Structures",
            typeOfAccount: "Asset",
            definition: "This account is credited for the allocation of cost of land improvements-aquaculture structures in accordance with the prescribed policy on depreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses - Land Improvements, Aquaculture Structures",
            typeOfAccount: "Asset",
            definition: "This account is credited for the amount recognized to reduce land improvements, aquaculture structures to its recoverable amount.",
            normalBalance: "Credit"
        },
        {
            word: "Other Land Improvements",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the purchase or fair value, if acquired through donation or transfers without cost, of land improvements.",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Depreciation - Other Land Improvements",
            typeOfAccount: "Asset",
            definition: "This account is credited for the allocation of cost of other land improvements in accordance with the prescribed policy on depreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses - Other Land Improvements",
            typeOfAccount: "Asset",
            definition: "This account is credited for the amount recognized to reduce other land improvements to its recoverable amount.",
            normalBalance: "Credit"
        },
        {
            word: "Infrastructure Assets",
            typeOfAccount: "Asset",
            definition: "It represent long-lived, tangible assets used by a company in its operations, including roads, bridges, airports, and other public infrastructure projects, which are typically held for use in providing public services and are not intended for resale.",
            normalBalance: "Debit"
        },
        {
            word: "Road Networks",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of the roads, highways and bridges, and other road network facilities.",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Depreciation - Road Networks",
            typeOfAccount: "Asset",
            definition: "This account is credited for the allocation of cost of road networks in accordance with the prescribed policy on depreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses - Road Networks",
            typeOfAccount: "Asset",
            definition: "This account is credited forth amount recognized to reduce road networks to its recoverable amount due to impairment.",
            normalBalance: "Credit"
        },
        {
            word: "Flood Control Systems",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of the seawalls, river walls and other flood control system facilities for public user for income generating purposes.",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Depreciation - Flood Control Systems",
            typeOfAccount: "Asset",
            definition: "This account is credited for the allocation of cost of flood control systems in accordance with the prescribed policy on depreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses - Flood Control Systems",
            typeOfAccount: "Asset",
            definition: "This account is credited for the amount recognized to reduce flood control systems to its recoverable amount due to impairment.",
            normalBalance: "Credit"
        },
        {
            word: "Sewer Systems",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of the waste treatment plants and other sewer system facilities for public user for income generating purposes.",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Depreciation - Sewer Systems",
            typeOfAccount: "Asset",
            definition: "This account is credited for the allocation of cost of sewer systems in accordance with the prescribed policy on depreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses - Sewer Systems",
            typeOfAccount: "Asset",
            definition: "This account is credited forth amount recognized to reduce sewer systems to its recoverable amount due to impairment.",
            normalBalance: "Credit"
        },
        {
            word: "Water Supply Systems",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of water source facility",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Depreciation - Water Supply Systems",
            typeOfAccount: "Asset",
            definition: "This account is credited for the allocation of cost of water supply systems in accordance with the prescribed policy on depreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses - Water Supply Systems",
            typeOfAccount: "Asset",
            definition: "This account is credited for the amount recognized to reduce water supply systems to its recoverable amount due to impairment.",
            normalBalance: "Credit"
        },
        {
            word: "Power Supply Systems",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of installations for generation and distribution of electricity",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Depreciation - Power Supply Systems",
            typeOfAccount: "Asset",
            definition: "This account is credited for the allocation of cost of power supply systems in accordance with the prescribed policy on depreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses - Power Supply Systems",
            typeOfAccount: "Asset",
            definition: "This account is credited for the amount recognized to reduce power supply systems to its recoverable amount due to impairment.",
            normalBalance: "Credit"
        },
        {
            word: "Communication Networks",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of communication networks",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Depreciation - Communication Networks",
            typeOfAccount: "Asset",
            definition: "This account is credited for the allocation of cost of communication networks in accordance with the prescribed policy on depreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses - Communication Networks",
            typeOfAccount: "Asset",
            definition: "This account is credited for the amount recognized to reduce communication networks to its recoverable amount due to impairment.",
            normalBalance: "Credit"
        },
        {
            word: "Seaport Systems",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of ports, lighthouses, harbors and other seaport facilities, for public use or for income generating purposes.",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Depreciation - Seaport Systems",
            typeOfAccount: "Asset",
            definition: "This account is credited for the allocation of cost of seaport systems in accordance with the prescribed policy on depreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses - Seaport Systems",
            typeOfAccount: "Asset",
            definition: "This account is credited for the amount recognized to reduce sea transport systems to its recoverable amount due to impairment.",
            normalBalance: "Credit"
        },
        {
            word: "Airport Systems",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of landing and taking-off area for aircraft, passengers’ arrival and departure areas, facilities for aircraft maintenance, and other airport facilities",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Depreciation - Airport Systems",
            typeOfAccount: "Asset",
            definition: "This account is credited for the allocation of cost of airport systems in accordance with the prescribed policy on depreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses - Airport Systems",
            typeOfAccount: "Asset",
            definition: "This account is credited for the amount recognized to reduce airport systems to its recoverable amount due to impairment.",
            normalBalance: "Credit"
        },
        {
            word: "Parks, Plazas and Monuments",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the construction or fair value, if acquired through donation or transfers without cost, of parks, plazas and monuments, not classified as Heritage Assets, for recreation and public use or for income generating purposes.",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Depreciation - Parks, Plazas and Monuments",
            typeOfAccount: "Asset",
            definition: "This account is credited for the allocation of cost of parks, plazas and monuments in accordance with the prescribed policy on depreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses - Parks, Plazas and Monuments",
            typeOfAccount: "Asset",
            definition: "This account is credited for the amount recognized to reduce parks, plazas and monuments to its recoverable amount due to impairment.",
            normalBalance: "Credit"
        },
        {
            word: "Other Infrastructure Assets",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of other public infrastructures which cannot be classified under any specific type of public infrastructures for public use or for income generating purposes.",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Depreciation - Other Infrastructure Assets",
            typeOfAccount: "Asset",
            definition: "This account is credited for the allocation of cost of other infrastructure assets in accordance with the prescribed policy on depreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses - Other Infrastructure Assets",
            typeOfAccount: "Asset",
            definition: "This account is credited for the amount recognized to reduce other infrastructure assets to its recoverable amount due to impairment.",
            normalBalance: "Credit"
        },
        {
            word: "Buildings and Other Structures",
            typeOfAccount: "Asset",
            definition: "It represent tangible assets used by a company in its operations, including buildings, warehouses, factories, and other structures, which are not intended for resale and are expected to be used over the long term.",
            normalBalance: "Debit"
        },
        {
            word: "Buildings",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of buildings",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Depreciation - Buildings",
            typeOfAccount: "Asset",
            definition: "This account is credited for the allocation of cost of buildings in accordance with the prescribed policy on depreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses - Buildings",
            typeOfAccount: "Asset",
            definition: "This account is credited for the amount recognized to reduce buildings to its recoverable amount due to impairment.",
            normalBalance: "Credit"
        },
        {
            word: "School Buildings",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of school buildings for the implementation of government’s education/learning programs.",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Depreciation - School Buildings",
            typeOfAccount: "Asset",
            definition: "This account is credited for the allocation of cost of school buildings in accordance with the prescribed policy on depreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses - School Buildings",
            typeOfAccount: "Asset",
            definition: "This account is credited for the amount recognized to reduce school buildings to its recoverable amount due to impairment.",
            normalBalance: "Credit"
        },
        {
            word: "Hospitals and Health Centers",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of hospitals and health centers, for use in the delivery of public health services.",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Depreciation - Hospitals and Health Centers",
            typeOfAccount: "Asset",
            definition: "This account is credited for the allocation of cost of hospitals and health centers in accordance with the prescribed policy on depreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses - Hospitals and Health Centers",
            typeOfAccount: "Asset",
            definition: "This account is credited for the amount recognized to reduce hospitals and health centers to its recoverable amount due to impairment.",
            normalBalance: "Credit"
        },
        {
            word: "Markets",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of markets for income generation.",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Depreciation - Markets",
            typeOfAccount: "Asset",
            definition: "This account is credited for the allocation of cost of markets in accordance with the prescribed policy on depreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses - Markets",
            typeOfAccount: "Asset",
            definition: "This account is credited for the amount recognized to reduce markets to its recoverable amount due to impairment.",
            normalBalance: "Credit"
        },
        {
            word: "Slaughterhouses",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of facilities where farm animals are butchered and processed.",
            normalBalance: "Debit"
        },
        {
            word: "Accumulated Depreciation - Slaughterhouses",
            typeOfAccount: "Asset",
            definition: "This account is credited for the allocation of cost of slaughterhouses in accordance with the prescribed policy on depreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Accumulated Impairment Losses- Slaughterhouses",
            typeOfAccount: "Asset",
            definition: "This account is credited for the amount recognized to reduce slaughterhouses to its recoverable amount due to impairment.",
            normalBalance: "Credit"
        },
        {
            word: "Hostels and Dormitories",
            typeOfAccount: "Asset",
            definition: "This account is used to recognize the cost incurred in the purchase or construction or fair value, if acquired through donation or transfers without cost, of hostels and dormitories for commercial and/or income generating purposes.",
            normalBalance: "Debit"
        },
        {
            word: "Payables",
            typeOfAccount: "Liabilities",
            definition: "It represent amounts owed by a company to its creditors for goods or services received but not yet paid for, including accounts payable, accrued expenses, and other liabilities.",
            normalBalance: "Credit"
        },
        {
            word: "Accounts Payable",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize receipt/purchase/procurement/acquisition of goods or services on account in the normal course of trade and business operation.",
            normalBalance: "Credit"
        },
        {
            word: "Due to Officers and Employees",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize incurrence of liability to officers and employees for salaries, benefits and other emoluments including authorized expenses paid in advance by the officers and employees.",
            normalBalance: "Credit"
        },
        {
            word: "Notes Payable",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize issuance of promissory notes/trade acceptance and other negotiable instruments.",
            normalBalance: "Credit"
        },
        {
            word: "Interest Payable",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize accrual of interest on loans/bonds or other indebtedness, whether short-term or long-term.",
            normalBalance: "Credit"
        },
        {
            word: "Operating Lease Payable",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize incurrence of a liability arising from operating lease contract.",
            normalBalance: "Credit"
        },
        {
            word: "Finance Lease Payable",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize incurrence of liability arising from finance lease contract.",
            normalBalance: "Credit"
        },
        {
            word: "Awards and Rewards Payable",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize granting of awards in recognition of any civic or professional achievement and of rewards to informers for the receipt of reliable information leading to successful arrest/capture of fugitives, seizure/confiscation of smuggled goods, or collection/recovery of unpaid taxes/surcharges/fines/penalties.",
            normalBalance: "Credit"
        },
        {
            word: "Service Concession Arrangement Payable",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize the liability arising from unconditional obligation of the grantor entity to make series of payments to the operator upon recognition of service concession assets, excluding finance charge and service components of the payments.",
            normalBalance: "Credit"
        },
        {
            word: "Pension Benefits Payable",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize accrual of pension of government personnel.",
            normalBalance: "Credit"
        },
        {
            word: "Leave Benefits Payable",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize accrual of money value of the earned leave credits of government personnel.",
            normalBalance: "Credit"
        },
        {
            word: "Retirement Gratuity Payable",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize liability for retirement gratuity benefits due to government personnel.",
            normalBalance: "Credit"
        },
        {
            word: "Bills/Bonds/Loans Payable",
            typeOfAccount: "Liabilities",
            definition: "It represent the amounts owed by a company to creditors for borrowings, including short-term bills, long-term bonds, and various types of loans.",
            normalBalance: "Credit"
        },
        {
            word: "Bonds Payable - Domestic",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize issuances/flotations of peso-denominated bonds.",
            normalBalance: "Credit"
        },
        {
            word: "Discount on Bonds Payable - Domestic",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize discounts on issuance of peso-denominated bonds.",
            normalBalance: "Credit"
        },
        {
            word: "Premium on Bonds Payable - Domestic",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize premiums on issuance of peso-denominated bonds.",
            normalBalance: "Credit"
        },
        {
            word: "Loans Payable - Domestic",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize receipt of loan proceeds (cash or non-cash) from local creditors.",
            normalBalance: "Credit"
        },
        {
            word: "Loans Payable - Foreign",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize receipt of loan proceeds (cash or non-cash) from foreign governments or international financial institutions.",
            normalBalance: "Credit"
        },
        {
            word: "Due to BIR",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize taxes withheld from officers/employees and other entities other than Value Added Tax Payable and Income Tax Payable.",
            normalBalance: "Credit"
        },
        {
            word: "Due to GSIS",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize the withholding of employees’ premium payments and other payables for remittance to the Government Service Insurance System (GSIS).",
            normalBalance: "Credit"
        },
        {
            word: "Due to Pag-IBIG",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize the withholding of employees’ premium payments and other payables for remittance to the Home Development Mutual Fund (HDMF).",
            normalBalance: "Credit"
        },
        {
            word: "Due to PhilHealth",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize the withholding of employees’ premium payments for remittance to the Philippine Health Insurance Corporation (PHIC).",
            normalBalance: "Credit"
        },
        {
            word: "Due to NGAs",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize receipt of funds from National Government Agencies for the implementation of specific programs or projects and other inter-agency transactions subject to liquidation.",
            normalBalance: "Credit"
        },
        {
            word: "Due to GOCCs",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize the receipt of funds from government corporations for delivery of goods/services as authorized by law; fund transfers from the government corporations for the implementation of specific programs or projects; NG-managed fund; escrow accounts; collateral deposits for the account of government corporations and SSS; and other inter-agency transactions, except those pertaining to GSIS, Pag-IBIG, PhilHealth and SSS.",
            normalBalance: "Credit"
        },
        {
            word: "Due to LGUs",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize the receipt of funds from LGUs for delivery of goods/services as authorized by law, fund transfers for the implementation of specific programs or projects and other inter-agency transactions.",
            normalBalance: "Credit"
        },
        {
            word: "Due to Joint Venture",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize the amounts payable to subsidiaries/joint ventures/associates/affiliates.",
            normalBalance: "Credit"
        },
        {
            word: "Intra-Agency Payables",
            typeOfAccount: "Liabilities",
            definition: "It represent amounts owed by one department or division within an organization to another department or division for goods or services provided.",
            normalBalance: "Credit"
        },
        {
            word: "Due to Other Funds",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize the authorized receipt of funds from one fund to another fund maintained by the same government corporation.",
            normalBalance: "Credit"
        },
        {
            word: "Due to Special Accounts",
            typeOfAccount: "Liabilities",
            definition: "It represents amounts owed by a company to special accounts or funds for specific purposes, typically earmarked for particular projects, activities, or obligations.",
            normalBalance: "Credit"
        },
        {
            word: "Due to Local Economic Enterprises",
            typeOfAccount: "Liabilities",
            definition: "It represents amounts owed by a company to local businesses or enterprises for goods or services received but not yet paid for.",
            normalBalance: "Credit"
        },
        {
            word: "Trust Liabilities",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize the receipt of amount held in trust for specific purpose.",
            normalBalance: "Credit"
        },
        {
            word: "Trust Liabilities - Disaster Risk Reduction and Management Fund",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize the receipt of amount held in trust for Disaster Risk Reduction and Management.",
            normalBalance: "Credit"
        },
        {
            word: "Bail Bonds Payable",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize the incurrence of liability arising from the receipt of cash bond from a person who is in the custody of the law to guaranty his appearance in court at the appointed day and time or the compliance with the conditions of the bond.",
            normalBalance: "Credit"
        },
        {
            word: "Guaranty/Security Deposits Payable",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize the incurrence of liability arising from the receipt of cash or cash equivalents to guaranty: (a) that the winning bidder shall enter into contract with the procuring entity; and (b) performance by the contractor of the terms of the contract.",
            normalBalance: "Credit"
        },
        {
            word: "Customers' Deposits Payable",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize the receipt of cash deposits from customers for goods/services to be delivered and property to be leased.",
            normalBalance: "Credit"
        },
        {
            word: "Deferred Credits/Unearned Income",
            typeOfAccount: "Liabilities",
            definition: "Deferred credits, also known as unearned income, represent income received by a company in advance for goods or services that have not yet been delivered or performed. These credits are recorded as liabilities until the goods are delivered or the services are rendered.",
            normalBalance: "Credit"
        },
        {
            word: "Deferred Credits",
            typeOfAccount: "Liabilities",
            definition: "It represent income received by a company in advance for goods or services that have not yet been delivered or performed. These credits are recorded as liabilities until the goods are delivered or the services are rendered.",
            normalBalance: "Credit"
        },
        {
            word: "Deferred Real Property Tax",
            typeOfAccount: "Liabilities",
            definition: "It refers to the portion of real property tax revenue that has been collected but not yet recognized as income in the current accounting period, typically because it pertains to future periods.",
            normalBalance: "Credit"
        },
        {
            word: "Deferred Special Education Tax",
            typeOfAccount: "Liabilities",
            definition: "It represents the portion of special education tax revenue that has been collected but not yet recognized as income in the current accounting period, typically because it pertains to future periods.",
            normalBalance: "Credit"
        },
        {
            word: "Deferred Finance Lease Revenue",
            typeOfAccount: "Liabilities",
            definition: "This account is used to set up in the books of the lessor the unearned income from finance lease which corresponds to the difference between the total finance lease receivable and the derecognized asset under a finance lease.",
            normalBalance: "Credit"
        },
        {
            word: "Deferred Service Concession Revenue",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize the unearned service concession revenue arising from the grant to operator the right to earn revenue from third party users of the service concession asset or another revenue generating asset.",
            normalBalance: "Credit"
        },
        {
            word: "Unearned Revenue - Investment Property",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize the receipt of advance rent/lease income from investment property.",
            normalBalance: "Credit"
        },
        {
            word: "Other Deferred Credits",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize other transactions not falling under any of the specific deferred credits accounts.",
            normalBalance: "Credit"
        },
        {
            word: "Provisions",
            typeOfAccount: "Liabilities",
            definition: "These are liabilities of uncertain timing or amount, which are recognized in the financial statements when there is a present obligation as a result of past events, and it is probable that a transfer of economic benefits will be required to settle the obligation, and a reliable estimate of the amount can be made.",
            normalBalance: "Credit"
        },
        {
            word: "Termination Benefits",
            typeOfAccount: "Liabilities",
            definition: "It represent income received in advance for goods or services not yet provided, recorded as liabilities until delivery or completion.",
            normalBalance: "Credit"
        },
        {
            word: "Other Provisions",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize liabilities of uncertain timing or amount. This includes provisions for litigation and other legal claims, warranty provisions, decommissioning provisions, or environmental provisions, among others.",
            normalBalance: "Credit"
        },
        {
            word: "Other Payables",
            typeOfAccount: "Liabilities",
            definition: "This account is used to recognize other liabilities not falling under any of the specific payable accounts.",
            normalBalance: "Credit"
        },
        {
            word: "Government Equity",
            typeOfAccount: "Equity",
            definition: "It represents the ownership interest of the government in public corporations or entities, typically expressed as the government's share of the equity or ownership of these entities.",
            normalBalance: "Credit"
        },
        {
            word: "Prior Period Adjustment",
            typeOfAccount: "Equity",
            definition: "It is an accounting correction made to the financial statements of a prior reporting period to rectify an error that occurred in that period. It involves adjusting the beginning balances of assets, liabilities, equity, revenues, or expenses to accurately reflect the correction.",
            normalBalance: "Credit (Debit)"
        },
        {
            word: "Intermediate Accounts",
            typeOfAccount: "Equity",
            definition: "These are ledger accounts used to record transactions temporarily before they are transferred to the appropriate permanent accounts in the general ledger. These accounts are used to facilitate the recording and classification of transactions during the accounting period.",
            normalBalance: "Credit (Debit)"
        },
        {
            word: "Income and Expense Summary",
            typeOfAccount: "Equity",
            definition: "It provides a concise overview of a company's financial performance, summarizing its total income and expenses over a specific period, typically presented in a statement format.",
            normalBalance: "Credit (Debit)"
        },
        {
            word: "Equity in Joint Venture",
            typeOfAccount: "Equity",
            definition: "It represents a company's share of ownership in a jointly controlled entity, where the company has significant influence but does not have control over the financial and operating policies of the joint venture.",
            normalBalance: "Credit (Debit)"
        },
        {
            word: "Unrealized Gain/(Loss)",
            typeOfAccount: "Equity",
            definition: "It represents the increase or decrease in the value of an asset that has not yet been sold or realized, reflecting changes in its market value.",
            normalBalance: "Credit"
        },
        {
            word: "Unrealized Gain/(Loss) from Changes in the Fair Value of Financial Assets",
            typeOfAccount: "Equity",
            definition: "It represents the increase or decrease in the value of financial assets, such as stocks, bonds, and derivatives, that have not yet been sold or realized, reflecting changes in their market value.",
            normalBalance: "Credit"
        },
        {
            word: "Tax Revenue",
            typeOfAccount: "Income",
            definition: "It refers to income generated by a government through various taxes imposed on individuals, businesses, and other entities, including income taxes, sales taxes, property taxes, and other forms of taxation.",
            normalBalance: "Credit"
        },
        {
            word: "Tax Revenue - Individual and Corporation",
            typeOfAccount: "Income",
            definition: "It represents the income generated by a government through taxes imposed on the income, profits, and other financial activities of individuals and corporate entities.",
            normalBalance: "Credit"
        },
        {
            word: "Professional Tax",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the taxes imposed on all persons engaged in the exercise/practice of their professions requiring government examination. This account shall be closed to the Revenue and Expense Summary account.",
            normalBalance: "Credit"
        },
        {
            word: "Community Tax",
            typeOfAccount: "Income",
            definition: "It is a local tax imposed by cities or municipalities on individuals residing or owning property within their jurisdiction.",
            normalBalance: "Credit"
        },
        {
            word: "Tax Revenue - Property",
            typeOfAccount: "Income",
            definition: "It represents the income generated by a government through taxes imposed on real estate, land, and other property owned by individuals, businesses, and other entities within its jurisdiction.",
            normalBalance: "Credit"
        },
        {
            word: "Real Property Tax- Basic",
            typeOfAccount: "Income",
            definition: "It refers to the primary tax imposed by local governments on real estate, land, and other immovable properties owned by individuals, businesses, and other entities within their jurisdiction.",
            normalBalance: "Credit"
        },
        {
            word: "Discount on Real Property Tax- Basic",
            typeOfAccount: "Income",
            definition: "It refers to a reduction or rebate offered by local governments on the basic real property tax, usually as an incentive for early or prompt payment of property taxes.",
            normalBalance: "Credit"
        },
        {
            word: "Special Education Tax",
            typeOfAccount: "Income",
            definition: "It is a local tax imposed by certain jurisdictions to fund special education programs and services for students with disabilities or special needs.",
            normalBalance: "Credit"
        },
        {
            word: "Discount on Special Education Tax",
            typeOfAccount: "Income",
            definition: "It refers to a reduction or rebate offered by local governments on the special education tax, usually as an incentive for early or prompt payment of taxes earmarked for funding special education programs and services.",
            normalBalance: "Credit"
        },
        {
            word: "Special Levy on Idle Lands",
            typeOfAccount: "Income",
            definition: "It refers to an additional tax or charge imposed by local governments on owners of idle or unused land, typically as an incentive to encourage development or productive use of the land.",
            normalBalance: "Credit"
        },
        {
            word: "Special Levy on Lands Benefited by Public Works Projects",
            typeOfAccount: "Income",
            definition: "It refers to an additional tax or charge imposed by local governments on properties that have benefited from public infrastructure projects such as roads, bridges, or utilities, to help cover the cost of the improvements.",
            normalBalance: "Credit"
        },
        {
            word: "Real Property Transfer Tax",
            typeOfAccount: "Income",
            definition: "It is a tax imposed by local governments on the transfer of real property from one owner to another, typically calculated as a percentage of the property's sale price or fair market value.",
            normalBalance: "Credit"
        },
        {
            word: "Tax Revenue - Goods and Services",
            typeOfAccount: "Income",
            definition: "It represents the income generated by a government through taxes imposed on the sale and consumption of goods and services, including value-added tax (VAT), sales tax, and other similar taxes.",
            normalBalance: "Credit"
        },
        {
            word: "Business Tax",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the taxes on persons or entities in the course of trade or business. This account shall be closed to the Revenue and Expense Summary account.",
            normalBalance: "Credit"
        },
        {
            word: "Tax on Sand, Gravel and Other Quarry Products",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the taxes imposed by government units on sand, gravel, stones, earth and other quarry resources extracted from public lands or from beds of seas, lakes, rivers, streams, creeks and other public waters within the Philippine's territorial jurisdiction. This account shall be closed to the Revenue and Expense Summary account.",
            normalBalance: "Credit"
        },
        {
            word: "Tax on Delivery Trucks and Vans",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the annual fixed tax levied on delivery trucks, vans or any vehicles used by manufacturers, producers, wholesalers, dealers or retailers in the delivery or distribution of distilled spirits, fermented liquors, soft drinks, cigars and cigarettes and other products to sales outlets, or consumers, whether directly or indirectly. This account shall be closed to the Revenue and Expense Summary account.",
            normalBalance: "Credit"
        },
        {
            word: "Amusement Tax",
            typeOfAccount: "Income",
            definition: "It is a tax imposed by local governments on various forms of entertainment, such as tickets to movies, concerts, sporting events, amusement parks, and other recreational activities.",
            normalBalance: "Credit"
        },
        {
            word: "Franchise Tax",
            typeOfAccount: "Income",
            definition: "It is a tax imposed by state governments on corporations and other business entities for the privilege of doing business within the state or for the right to use a corporate or business franchise.",
            normalBalance: "Credit"
        },
        {
            word: "Printing and Publication Tax",
            typeOfAccount: "Income",
            definition: "It is a tax imposed by local governments on the printing, publishing, and distribution of newspapers, magazines, books, and other printed materials.",
            normalBalance: "Credit"
        },
        {
            word: "Tax Revenue - Fines and Penalties",
            typeOfAccount: "Income",
            definition: "It represents income generated by a government through the imposition of fines, penalties, and other punitive measures for violations of laws, regulations, or ordinances.",
            normalBalance: "Credit"
        },
        {
            word: "Tax Revenue - Fines and Penalties - Taxes on Individual and Corporation",
            typeOfAccount: "Income",
            definition: "This account is used to recognize all fines and penalties charged in relation to collection of taxes on individual and corporation.This account shall be closed to the Revenue and Expense Summary account.",
            normalBalance: "Credit"
        },
        {
            word: "Tax Revenue - Fines and Penalties - Property Taxes",
            typeOfAccount: "Income",
            definition: "This account is used to recognize all fines and penalties charged in relation to the collection of estate, donors and capital gains taxes.This account shall be closed to the Revenue and Expense Summary account.",
            normalBalance: "Credit"
        },
        {
            word: "Tax Revenue - Fines and Penalties - Taxes on Goods and Services",
            typeOfAccount: "Income",
            definition: "This account is used to recognize all fines and penalties charged in relation to the collection ofimport duties, excise tax and business taxes. This account shall be closed to the Revenue and Expense Summary account.",
            normalBalance: "Credit"
        },
        {
            word: "Tax Revenue - Fines and Penalties - Other Taxes",
            typeOfAccount: "Income",
            definition: "This account is used to recognize all fines and penalties imposed on the collection of taxes classified as other taxes.This account shall be closed to the Revenue and Expense Summary account.",
            normalBalance: "Credit"
        },
        {
            word: "Share from National Taxes",
            typeOfAccount: "Income",
            definition: "It represents the portion of national tax revenue allocated to local governments or other entities as their share of taxes collected at the national level, often distributed based on specific revenue-sharing agreements or formulas.",
            normalBalance: "Credit"
        },
        {
            word: "Share from Internal Revenue Collections (IRA)",
            typeOfAccount: "Income",
            definition: "It refers to the portion of national tax revenue allocated to local governments as their share of taxes collected by the national government's internal revenue service, often distributed based on specific revenue-sharing agreements or formulas.",
            normalBalance: "Credit"
        },
        {
            word: "Share from Expanded Value Added Tax",
            typeOfAccount: "Income",
            definition: "It represents the portion of national tax revenue allocated to local governments as their share of taxes collected from the expanded value-added tax, a type of consumption tax imposed on the sale of goods and services at each stage of production or distribution.",
            normalBalance: "Credit"
        },
        {
            word: "Share from National Wealth",
            typeOfAccount: "Income",
            definition: "It represents the portion of national tax revenue allocated to local governments or other entities as their share of taxes collected on national wealth, including taxes on property, assets, and other forms of national wealth.",
            normalBalance: "Credit"
        },
        {
            word: "Share from Tobacco Excise Tax (RA 7171 and 8240)",
            typeOfAccount: "Income",
            definition: "It refers to the portion of national tax revenue allocated to local governments, particularly tobacco-producing provinces, as mandated by Republic Acts 7171 and 8240, which provide for a share of the national tobacco excise tax for the development of tobacco-producing provinces and the welfare of tobacco farmers.",
            normalBalance: "Credit"
        },
        {
            word: "Share from Economic Zones",
            typeOfAccount: "Income",
            definition: "It represents the income received by a local government from economic zones within its jurisdiction, including revenue from taxes, fees, and other charges levied on businesses operating within the economic zones.",
            normalBalance: "Credit"
        },
        {
            word: "Service and Business Income",
            typeOfAccount: "Income",
            definition: "It represent the total revenue generated by a company from its primary business activities, including income from providing services, selling goods, renting out assets, and other operational activities.",
            normalBalance: "Credit"
        },
        {
            word: "Service Income",
            typeOfAccount: "Income",
            definition: "It refers to revenue generated by a company from providing services to customers, clients, or other businesses, including fees for professional services, consulting, maintenance, and other service-related activities.",
            normalBalance: "Credit"
        },
        {
            word: "Permit Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the fees and charges collected in the issuance of permits by government corporations in the exercise of regulatory powers.",
            normalBalance: "Credit"
        },
        {
            word: "Registration Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the fees collected for registration of property, deeds, individuals and associations.",
            normalBalance: "Credit"
        },
        {
            word: "Registration Plates, Tags and Stickers Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize fees collected for registration of plates, tags and stickers issued by authorized government corporations.",
            normalBalance: "Credit"
        },
        {
            word: "Clearance and Certification Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the fees collected for the issuance of clearances/certificates to individuals/organizations/ groups/corporations.",
            normalBalance: "Credit"
        },
        {
            word: "Clearance and Certification Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the fees collected for the issuance of clearances/certificates to individuals/organizations/groups/corporations.",
            normalBalance: "Credit"
        },
        {
            word: "Supervision and Regulation Enforcement Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the fees and charges collected for supervision and enforcement of laws and regulations.",
            normalBalance: "Credit"
        },
        {
            word: "Inspection Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the fees for the conduct of inspections by authorized government corporations.",
            normalBalance: "Credit"
        },
        {
            word: "Verification and Authentication Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the fees collected for verification of individual contract of employment, master/model or pro-forma contract, proof of visa availability, job order/manpower request, special power of attorney, group service contract of employment, recruitment/manning agreement and other similar documents.",
            normalBalance: "Credit"
        },
        {
            word: "Processing Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the fees collected for the processing of documents for securing permits/applications.",
            normalBalance: "Credit"
        },
        {
            word: "Occupation Fees",
            typeOfAccount: "Income",
            definition: "It represent charges levied by local authorities or governments for the use of public spaces, facilities, or resources for commercial or business activities.",
            normalBalance: "Credit"
        },
        {
            word: "Fishery Rentals, Fees and Charges",
            typeOfAccount: "Income",
            definition: "It represent income generated from the rental of fishing grounds, licensing fees for fishing activities, and other charges related to the use of fisheries resources.",
            normalBalance: "Credit"
        },
        {
            word: "Fees for Sealing and Licensing of Weights and Measures",
            typeOfAccount: "Income",
            definition: "It represent charges collected by government authorities for verifying and certifying the accuracy of weighing and measuring devices used in commercial transactions, ensuring compliance with legal standards.",
            normalBalance: "Credit"
        },
        {
            word: "Fines and Penalties - Service Income",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the fees collected for the processing of documents for fines and penalties charged to service income.",
            normalBalance: "Credit"
        },
        {
            word: "Other Service Income",
            typeOfAccount: "Income",
            definition: "This account is used to recognize other service income not falling under any of the specific service income accounts. This account shall be closed to the Revenue and Expense Summary account.",
            normalBalance: "Credit"
        },
        {
            word: "Business Income",
            typeOfAccount: "Income",
            definition: "It refers to the total revenue generated by a company from its primary business activities, including sales of goods or services, rental income, and other operating income.",
            normalBalance: "Credit"
        },
        {
            word: "School Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the fees imposed to students of state universities, colleges, public schools and other entities.",
            normalBalance: "Credit"
        },
        {
            word: "Affiliation Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the fees collected by institutions from students undertaking practice of their professions.",
            normalBalance: "Credit"
        },
        {
            word: "Seminar/Training Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the fees collected or billed for attendance in short course trainings and seminars/conventions/workshops.",
            normalBalance: "Credit"
        },
        {
            word: "Rent Income",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the income from use of government property/facilities, such as rent/lease of function rooms/buildings, fees on storage, warehousing, use of heavy equipment of other government entities, rental fees of drilling equipment and accessories, leased lines/channels, safe deposit box, bank premises and equipment, real and other property acquired and the like.",
            normalBalance: "Credit"
        },
        {
            word: "Communication Network Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the fees collected from domestic money transfer, social telegram service, two-way radio service, public calling service, fixed line telephone service, telegraphic transfer, electronic messaging service and other related services.",
            normalBalance: "Credit"
        },
        {
            word: "Transportation System Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the income from the operation of transportation system like trains, buses, watercrafts, aircrafts, and the use of land transport system terminals.",
            normalBalance: "Credit"
        },
        {
            word: "Road Network Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the toll fees charged for use of road network and bridges.",
            normalBalance: "Credit"
        },
        {
            word: "Waterworks System Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the income from the operation of waterworks system, such as water connection fees, water utilization fees, irrigation fees, and the like.",
            normalBalance: "Credit"
        },
        {
            word: "Power Supply System Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the income earned from power generation, transmission and distribution.",
            normalBalance: "Credit"
        },
        {
            word: "Seaport System Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the fees imposed on vessels for use of port facilities, such as loading/discharging of cargoes, embarking/disembarking passengers, dockage berthing/bunkering and anchoring at the port, wharfage, arrastre/stevedoring, pilotage, fees charged for cargoes whether for domestic shipment or transshipment and security fee for the transport of containers and other similar fees.",
            normalBalance: "Credit"
        },
        {
            word: "Parking Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the fees imposed on the use of airport facilities such as landing and taking-off area for aircraft, facilities for aircraft maintenance, and other airport facilities such as airport runways and taxiways, radio beacons, aprons and the like.",
            normalBalance: "Credit"
        },
        {
            word: "Receipts from Operation of Hostels/Dormitories and Other Like Facilities",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the fees/charges for the use of hostels, dormitories, cottages, guest houses, restaurants, canteen, cafeterias, dormitory, staff houses, lodging houses and other similar facilities.",
            normalBalance: "Credit"
        },
        {
            word: "Receipts from Market Operations",
            typeOfAccount: "Income",
            definition: "It represent income generated by a market, such as fees charged to vendors for renting stalls or selling spaces, as well as other related services provided by the market.",
            normalBalance: "Credit"
        },
        {
            word: "Receipts from Slaughterhouse Operation",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the collections from the operations of slaughterhouse which includes rentals of spaces for warehousing, livestock slaughter fees and the like.",
            normalBalance: "Credit"
        },
        {
            word: "Receipts from Cemetery Operations",
            typeOfAccount: "Income",
            definition: "It represent income generated by a cemetery from various services, including the sale of burial plots, interment fees, maintenance fees, and other related services.",
            normalBalance: "Credit"
        },
        {
            word: "Receipts from Printing and Publication",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the income from sale of printed forms, materials or other publications.",
            normalBalance: "Credit"
        },
        {
            word: "Sales Revenue",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the income from sale of merchandise and other inventory items and services in the regular course of business.",
            normalBalance: "Credit"
        },
        {
            word: "Sales Discounts",
            typeOfAccount: "Income",
            definition: "This account is used to recognize discounts on sale of goods, medicines and other inventory items, and services.",
            normalBalance: "Credit"
        },
        {
            word: "Garbage Fees",
            typeOfAccount: "Income",
            definition: "It represent charges levied by local governments or waste management companies for the collection, disposal, or recycling of garbage and other waste materials.",
            normalBalance: "Credit"
        },
        {
            word: "Hospital Fees",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the fees/charges for hospital services rendered to patients including medical, dental and laboratory services.",
            normalBalance: "Credit"
        },
        {
            word: "Dividend Income",
            typeOfAccount: "Income",
            definition: "This account is used to recognize cash dividends earned and/or actually collected on equity securities held as held for trading, designated at fair value through surplus/profit or deficit/loss, available for sale and investments in non-marketable equity securities by the government corporations.",
            normalBalance: "Credit"
        },
        {
            word: "Interest Income",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the interest earned and/or actually collected on loans and receivables, investments and bank deposits/financial assets.",
            normalBalance: "Credit"
        },
        {
            word: "Service Concession Revenue",
            typeOfAccount: "Income",
            definition: "It refers to income generated by a company through concession agreements, where the company provides services, such as operating and maintaining infrastructure (like toll roads, bridges, or airports), in exchange for fees paid by the government or other contracting parties.",
            normalBalance: "Credit"
        },
        {
            word: "Lease Revenue",
            typeOfAccount: "Income",
            definition: "It represents income earned by a business from leasing out its assets, such as property, equipment, or vehicles, to another party in exchange for periodic lease payments.",
            normalBalance: "Credit"
        },
        {
            word: "Share in the Profit of Joint Venture",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the share of government entities from the profit of joint venture operations under the equity method of accounting or share in the revenue of joint venture.",
            normalBalance: "Credit"
        },
        {
            word: "Fines and Penalties - Business Income",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the fines and penalties charged for delayed or non-compliance with business regulatory requirements.",
            normalBalance: "Credit"
        },
        {
            word: "Other Business Income",
            typeOfAccount: "Income",
            definition: "This account is used to recognize other business income not falling under any of the specific business income accounts.",
            normalBalance: "Credit"
        },
        {
            word: "Transfers, Assistance and Subsidy",
            typeOfAccount: "Income",
            definition: "It represent various forms of financial support provided by governments, organizations, or individuals to help offset the costs of specific activities, projects, or expenses, often with the aim of promoting certain objectives, providing relief, or supporting economic development.",
            normalBalance: "Credit"
        },
        {
            word: "Assistance and Subsidy",
            typeOfAccount: "Income",
            definition: "It represent financial support provided by governments, organizations, or individuals to help offset the costs of specific activities, projects, or expenses, often with the aim of promoting certain objectives or providing relief.",
            normalBalance: "Credit"
        },
        {
            word: "Subsidy from National Government",
            typeOfAccount: "Income",
            definition: "This account is used by non-GBEs to recognize NCA received; constructive receipt of Non-Cash Availment Authority (NCAA) for advanced payments made by foreign creditors and donors; constructive receipt of NCA for TRAs and Tax Expenditure Fund (TEF), budgetary support fund from the NG; and adjustments for lapsed NCA.",
            normalBalance: "Credit"
        },
        {
            word: "Subsidy from Local Government Units",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the amount of funds/assets transferred from LGUs (Province, City, Municipality or Barangay).",
            normalBalance: "Credit"
        },
        {
            word: "Subsidy from Government-Owned and/or Controlled Corporations",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the amount of funds/assets transferred from government corporations.",
            normalBalance: "Credit"
        },
        {
            word: "Subsidy from Other Funds",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the amount of funds/assets transferred from other funds.",
            normalBalance: "Credit"
        },
        {
            word: "Subsidy from General Fund Proper/Other Special Accounts",
            typeOfAccount: "Income",
            definition: "This account is used to record transfers of funds from the general fund proper to an economic enterprise/special accounts of the same LGU.",
            normalBalance: "Credit"
        },
        {
            word: "Subsidy from Other Local Economic Enterprise",
            typeOfAccount: "Income",
            definition: "This account is used to record transfers of funds as subsidy from economic enterprises/public utility to the general fund proper or to another local economic enterprise/public utility of the same LGU.",
            normalBalance: "Credit"
        },
        {
            word: "Transfers from General Fund of LGU Counterpart/Equity Share",
            typeOfAccount: "Income",
            definition: "This account is used to recognize transfers of LGU counterpart or equity share upon fulfillment of the condition for the transfer.",
            normalBalance: "Credit"
        },
        {
            word: "Transfers from General Fund of Unspent DRRMF",
            typeOfAccount: "Income",
            definition: "This account is used to recognize transfers of unspent DRRMF allocations in the trust fund upon fulfillment of the condition for the transfer.",
            normalBalance: "Credit"
        },
        {
            word: "Share",
            typeOfAccount: "Income",
            definition: "It represents ownership in a company, entitling the shareholder to a portion of the company's assets and profits, as well as voting rights in corporate matters.",
            normalBalance: "Credit"
        },
        {
            word: "Share from Philippine Amusement and Gaming Corporation (PAGCOR)",
            typeOfAccount: "Income",
            definition: "This account is used to recognize share of government entities from PAGCOR",
            normalBalance: "Credit"
        },
        {
            word: "Share from Philippine Charity Sweepstakes Office (PCSO)",
            typeOfAccount: "Income",
            definition: "This account is used to recognize share of government entities from PCSO",
            normalBalance: "Credit"
        },
        {
            word: "Grants and Donations",
            typeOfAccount: "Income",
            definition: "These are funds received by a business or organization from external sources, such as government agencies, foundations, or individuals, to support specific projects, activities, or operations, often without the expectation of repayment.",
            normalBalance: "Credit"
        },
        {
            word: "Grants and Donations in Cash",
            typeOfAccount: "Income",
            definition: "This account is used to recognize all grants and donations in cash received from other levels of government, private sectors or international institutions with or without restrictions or conditions.",
            normalBalance: "Credit"
        },
        {
            word: "Grants and Donations in Kind",
            typeOfAccount: "Income",
            definition: "This account is used to recognize all grants and donations in kind received from other levels of government, private sectors or international institutions with or without restrictions or conditions.",
            normalBalance: "Credit"
        },
        {
            word: "Grants from Concessionary loans",
            typeOfAccount: "Income",
            definition: "This account is used to record the difference between the loan proceeds and the fair value of the loan on initial recognition.",
            normalBalance: "Credit"
        },
        {
            word: "Gains",
            typeOfAccount: "Income",
            definition: "It refer to the positive difference between the selling price of an asset and its original purchase price or book value, resulting in a profit for the seller.",
            normalBalance: "Credit"
        },
        {
            word: "Gain from Changes in Fair Value of Financial Instruments",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the gain from changes in fair value of financial instruments such as financial assets and liabilities held for trading, financial assets and liabilities designated at fair value through surplus/profit or deficit/loss and non-trading financial assets and liabilities.",
            normalBalance: "Credit"
        },
        {
            word: "Gain on Foreign Exchange (FOREX)",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the gain in the revaluation of foreign denominated assets and liabilities including actual gain incurred in the conversion of foreign currency to local currency at balance sheet date.",
            normalBalance: "Credit"
        },
        {
            word: "Gain on Sale of Investments",
            typeOfAccount: "Income",
            definition: "This account is used to recognize realized gains on sale/redemption/transfer of investments such as financial assets held for trading, financial assets designated at fair value through surplus/profit or deficit/loss and non-trading financial assets.",
            normalBalance: "Credit"
        },
        {
            word: "Gain on Sale of Investment Property",
            typeOfAccount: "Income",
            definition: "This account is used to recognize gains on sale of capital assets held to earn rentals and/or held for capital appreciation.",
            normalBalance: "Credit"
        },
        {
            word: "Gain on Sale of Property, Plant and Equipment",
            typeOfAccount: "Income",
            definition: "This account is used to recognize gains on sale of government PPEs including bank premises.",
            normalBalance: "Credit"
        },
        {
            word: "Gain on Initial Recognition of Biological Assets",
            typeOfAccount: "Income",
            definition: "This account is used to recognize gains on the initial recognition of biological assets.",
            normalBalance: "Credit"
        },
        {
            word: "Gain on Sale of Biological Assets",
            typeOfAccount: "Income",
            definition: "This account is used to recognize gains on the sale of biological assets.",
            normalBalance: "Credit"
        },
        {
            word: "Gain from Changes in Fair Value Less Cost to Sell of Biological Assets Due to Physical Change",
            typeOfAccount: "Income",
            definition: "This account is used to recognize gains from changes in fair value less cost to sell of biological assets due to physical change.",
            normalBalance: "Credit"
        },
        {
            word: "Gain from Changes in Fair Value Less Cost to Sell of Biological Assets Due to Price Change",
            typeOfAccount: "Income",
            definition: "This account is used to recognize gains from changes in fair value less cost to sell of biological assets due to price change.",
            normalBalance: "Credit"
        },
        {
            word: "Gain from Initial Recognition of Agricultural Produce",
            typeOfAccount: "Income",
            definition: "This account is used to recognize gains on the initial recognition of agricultural produce.",
            normalBalance: "Credit"
        },
        {
            word: "Gain on Sale of Intangible Assets",
            typeOfAccount: "Income",
            definition: "This account is used to recognize gains on the sale of intangible assets.",
            normalBalance: "Credit"
        },
        {
            word: "Reversal of Impairment Losses",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the reversal of impairment loss.",
            normalBalance: "Credit"
        },
        {
            word: "Other Gains",
            typeOfAccount: "Income",
            definition: "This account is used to recognize gains which are not classified under any of the specific gain accounts.",
            normalBalance: "Credit"
        },
        {
            word: "Miscellaneous Income",
            typeOfAccount: "Income",
            definition: "These includes revenue generated by a business from various sources not directly related to its primary operations, such as rental income, interest income, gains from the sale of assets, and other miscellaneous sources.",
            normalBalance: "Credit"
        },
        {
            word: "Miscellaneous Income",
            typeOfAccount: "Income",
            definition: "This account is used to recognize income earned which is not classified under the specific income accounts.",
            normalBalance: "Credit"
        },
        {
            word: "Other Non-Operating Income",
            typeOfAccount: "Income",
            definition: "These are revenue generated by a business from sources other than its core operations, such as rental income, interest income, gains from the sale of assets, and other miscellaneous income not directly related to its primary business activities.",
            normalBalance: "Credit"
        },
        {
            word: "Sale of Assets",
            typeOfAccount: "Income",
            definition: "An asset sale happens when you sell or transfer the assets of your company, rather than shares or stock. These assets can be tangible (eg machinery and inventory) or intangible (eg intellectual property). In an asset sale, you can typically choose what you want to sell.",
            normalBalance: "Credit"
        },
        {
            word: "Sale of Garnished/Confiscated/Abandoned/Seized Goods and Properties",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the receipts derived from the sale of garnished/confiscated/abandoned/seized goods or property title of which had been decided in favor of the government.",
            normalBalance: "Credit"
        },
        {
            word: "Sale of Garnished/Confiscated/Abandoned/Seized Goods and Properties",
            typeOfAccount: "Income",
            definition: "This account is used to recognize the receipts derived from the sale of garnished/confiscated/abandoned/seized goods or property title of which had been decided in favor of the government.",
            normalBalance: "Credit"
        },
        {
            word: "Personnel Services",
            typeOfAccount: "Expenses",
            definition: "It encompass all expenses related to employing personnel, including salaries, wages, benefits, and other costs associated with maintaining a workforce.",
            normalBalance: "Debit"
        },
        {
            word: "Salaries and Wages - Regular",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the pay proper for services rendered of government employees occupying regular plantilla positions.",
            normalBalance: "Debit"
        },
        {
            word: "Salaries and Wages - Casual/Contractual",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the pay proper for services rendered by employees contracted/hired to perform regular entity functions and specific vital activities or services which cannot be provided by the regular or permanent staff of the entity.",
            normalBalance: "Debit"
        },
        {
            word: "Personal Economic Relief Allowance (PERA)",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the pay proper for services rendered by employees contracted/hired to perform regular entity functions and specific vital activities or services which cannot be provided by the regular or permanent staff of the entity.",
            normalBalance: "Debit"
        },
        {
            word: "Representation Allowance (RA)",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the monthly representation allowance granted to authorized officials and employees in the actual performance of their respective functions, both commutable and reimbursable.",
            normalBalance: "Debit"
        },
        {
            word: "Transportation Allowance (TA)",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the monthly transportation allowance granted to authorized officials and employees in the actual performance of their respective functions, both commutable and reimbursable.",
            normalBalance: "Debit"
        },
        {
            word: "Clothing/Uniform Allowance",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the fixed amount granted to authorized government officials/employees for the upkeep/replacement of clothing/uniform paid in cash or in kind.",
            normalBalance: "Debit"
        },
        {
            word: "Subsistence Allowance",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount granted to authorized government officials/employees to cover cost of accommodations, meals, and incidental expenses incurred by employees who are on official business.",
            normalBalance: "Debit"
        },
        {
            word: "Laundry Allowance",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount granted to authorized government officials/employees to cover the cost of laundry of uniform of employees who are on official business.",
            normalBalance: "Debit"
        },
        {
            word: "Quarters Allowance",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount granted to authorized government officials/employees to cover cost of accommodation or suitable and adequate living quarters incurred by employees who are on official business.",
            normalBalance: "Debit"
        },
        {
            word: "Productivity Incentive Allowance",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the fixed amount granted to authorized government officials/employees for at least satisfactory performance in the discharge of their official duties.",
            normalBalance: "Debit"
        },
        {
            word: "Overseas Allowance",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the allowances granted to authorized government officials/employees on foreign assignments/missions.",
            normalBalance: "Debit"
        },
        {
            word: "Honoraria",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the payment given to professionals for services in recognition of their expertise, broad and superior knowledge in specific fields and special projects.",
            normalBalance: "Debit"
        },
        {
            word: "Hazard Pay",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the payment to government officials/employees assigned in difficult/dangerous/strife-torn/embattled areas as certified by appropriate government body and to those whose lives are directly exposed to work conditions which may cause them injury/sickness/death/harmful change.",
            normalBalance: "Debit"
        },
        {
            word: "Longevity Pay",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the additional compensation to government officials and employees based on years of service rendered to the government.",
            normalBalance: "Debit"
        },
        {
            word: "Overtime and Night Pay",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the extra compensation paid to government employees who are authorized to work for more than the normal 40 hours in one workweek or on days of rest.",
            normalBalance: "Debit"
        },
        {
            word: "Year End Bonus",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount granted annually to government officials and employees as authorized by law.",
            normalBalance: "Debit"
        },
        {
            word: "Cash Gift",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount granted annually in addition to the year-end bonus to government officials and employees as authorized by law.",
            normalBalance: "Debit"
        },
        {
            word: "Other Bonuses and Allowances",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize other authorized bonuses and allowances granted to government officials/employees not falling under any of the specific other compensation accounts.",
            normalBalance: "Debit"
        },
        {
            word: "Personnel Benefit Contributions",
            typeOfAccount: "Expenses",
            definition: "These are payments made by an employer to provide benefits to employees, such as retirement plans, health insurance, life insurance, and other employee welfare programs.",
            normalBalance: "Debit"
        },
        {
            word: "Retirement and Life Insurance Premiums",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the government’s share in premium contributions to the Government Service Insurance System and other retirement and life benefit systems.",
            normalBalance: "Debit"
        },
        {
            word: "Pag-IBIG Contributions",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the government's share in premium contributions to the Home Development Mutual Fund.",
            normalBalance: "Debit"
        },
        {
            word: "PhilHealth Contributions",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the government’s share in premium contributions to the Philippine Health Insurance Corporation.",
            normalBalance: "Debit"
        },
        {
            word: "Employees Compensation Insurance Premiums",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the government’s share in premium contributions to the Employees' Compensation Commission (ECC).",
            normalBalance: "Debit"
        },
        {
            word: "Provident/Welfare Fund Contributions",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount contributed by the government for the employees’ provident or welfare fund.",
            normalBalance: "Debit"
        },
        {
            word: "Pension Benefits",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount of pension to government employees occupying regular plantilla positions.",
            normalBalance: "Debit"
        },
        {
            word: "Retirement Gratuity",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount of the total creditable services of retirees converted into gratuity months multiplied by the highest salary received.",
            normalBalance: "Debit"
        },
        {
            word: "Terminal Leave Benefits",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the money value of the accumulated leave credits of government officials and employees.",
            normalBalance: "Debit"
        },
        {
            word: "Other Personnel Benefits",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount contributed by the government for the employees’ benefits not falling under any of the specific other personnel accounts.",
            normalBalance: "Debit"
        },
        {
            word: "Traveling Expenses - Local",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the costs incurred in the movement/transport of government directors, officers and employees within the country.",
            normalBalance: "Debit"
        },
        {
            word: "Traveling Expenses - Foreign",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the costs incurred in the movement/transport of government directors, officers and employees outside the country.",
            normalBalance: "Debit"
        },
        {
            word: "Training Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the costs incurred for the participation/attendance in and conduct of trainings, conventions and seminars/workshops.",
            normalBalance: "Debit"
        },
        {
            word: "Scholarship Grants/Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the costs of scholarships granted by the government to individuals in the pursuit of further learning, study or research.",
            normalBalance: "Debit"
        },
        {
            word: "Office Supplies Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost or value of office supplies such as bond paper, ink, and small tangible items.",
            normalBalance: "Debit"
        },
        {
            word: "Accountable Forms Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of accountable forms with or without money value such as official receipts, passports, tickets, permit/license plates, and the like, issued to end-users.",
            normalBalance: "Debit"
        },
        {
            word: "Non-Accountable Forms Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of non-accountable forms such as pre-printed application forms, tax returns forms, accounting forms and the like, issued to end-users.",
            normalBalance: "Debit"
        },
        {
            word: "Animal/Zoological Supplies Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the costs of food, medicines, veterinary and other maintenance needs of animals issued for use in government parks, zoos, wildlife sanctuaries and botanical gardens.",
            normalBalance: "Debit"
        },
        {
            word: "Food Supplies Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of food issued to hospital/rehabilitation patients, jail inmates and the like.",
            normalBalance: "Debit"
        },
        {
            word: "Welfare Goods Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of goods issued/distributed to people affected by calamities/disasters/ground conflicts such as canned goods, blankets, mats, kitchen utensils, flashlights and other similar items.",
            normalBalance: "Debit"
        },
        {
            word: "Drugs and Medicines Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the costs of drugs and medicines issued to end-users for government operations.",
            normalBalance: "Debit"
        },
        {
            word: "Medical, Dental and Laboratory Supplies Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the costs of medical, dental and laboratory supplies issued to end-users for government operations.",
            normalBalance: "Debit"
        },
        {
            word: "Fuel, Oil and Lubricants Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the costs of fuel, oil, lubricants, coals and the like issued for use of government vehicles, running power plants and other equipment in connection with government operations/projects.",
            normalBalance: "Debit"
        },
        {
            word: "Agricultural and Marine Supplies Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of fertilizers, pesticides and other marine and agricultural supplies issued in government operations/projects.",
            normalBalance: "Debit"
        },
        {
            word: "Textbooks and Instructional Materials Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of books and instructional materials distributed to public schools including flipcharts, video clips/slides, and the like.",
            normalBalance: "Debit"
        },
        {
            word: "Military, Police and Traffic Supplies Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost or value of military and police supplies issued/used in government operations such as clubs/cudgels, night sticks, police/traffic gears, flashlights, truncheons, ammunitions and the like.",
            normalBalance: "Debit"
        },
        {
            word: "Chemical and Filtering Supplies Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of chemical, water treatment, filtering supplies and the like used in government operations.",
            normalBalance: "Debit"
        },
        {
            word: "Other Supplies and Materials Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of inventories issued to end-users not otherwise classified under the specific inventory expense accounts.",
            normalBalance: "Debit"
        },
        {
            word: "Utility Expenses",
            typeOfAccount: "Expenses",
            definition: "It represent the costs incurred by a business for essential services such as electricity, water, gas, and other utilities necessary for its operations.",
            normalBalance: "Debit"
        },
        {
            word: "Water Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of water consumed in government operations/projects.",
            normalBalance: "Debit"
        },
        {
            word: "Electricity Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of electricity consumed in government operations/projects.",
            normalBalance: "Debit"
        },
        {
            word: "Communication Expenses",
            typeOfAccount: "Expenses",
            definition: "These include costs related to various communication channels used by a business, such as telephone, internet, postage, and other communication services necessary for daily operations and maintaining communication with clients, suppliers, and employees.",
            normalBalance: "Debit"
        },
        {
            word: "Postage and Courier Services",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of delivery/transmission of official messages, mails, documents, records and the like.",
            normalBalance: "Debit"
        },
        {
            word: "Telephone Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of transmitting messages through telephone lines (mobile or landlines), faxes, telex and the like whether prepaid or postpaid.",
            normalBalance: "Debit"
        },
        {
            word: "Internet Subscription Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of using internet services in government operations.",
            normalBalance: "Debit"
        },
        {
            word: "Cable, Satellite, Telegraph and Radio Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of using cable/satellite/telegram/radio services.",
            normalBalance: "Debit"
        },
        {
            word: "Awards/Rewards Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount given in recognition of any civic or professional achievement and excellent performance.",
            normalBalance: "Debit"
        },
        {
            word: "Prizes",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount paid to winners and sellers of games, lottery and other competitive and promotional activities including agents’ share/commission.",
            normalBalance: "Debit"
        },
        {
            word: "Survey Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost incurred in the conduct of cadastral, structural, topographical, statistical and other type of surveys conducted by government entities.",
            normalBalance: "Debit"
        },
        {
            word: "Research, Exploration and Development Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost incurred in the conduct of studies to gain scientific or technical knowledge on future projects including development, refinement or evaluation of policies for use of management.",
            normalBalance: "Debit"
        },
        {
            word: "Demolition and Relocation Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the costs of demolition of structures and relocation of settlers and structures affected by government projects.",
            normalBalance: "Debit"
        },
        {
            word: "Desilting and Dredging Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the costs incurred in removing large accumulation of decomposed litters and other organic debris in and deepening of canals, sewerage, rivers, creeks, and the like.",
            normalBalance: "Debit"
        },
        {
            word: "Generation, Transmission and Distribution Expenses",
            typeOfAccount: "Expenses",
            definition: "It represent the costs incurred by utility companies for producing, transmitting, and distributing electricity or other forms of energy to consumers.",
            normalBalance: "Debit"
        },
        {
            word: "Confidential Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount paid for expenses related to surveillance/confidential activities in civilian government entities that are intended to support the mandate or operations of the entity.",
            normalBalance: "Debit"
        },
        {
            word: "Intelligence Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount paid for expenses related to intelligence information gathering activities of uniformed and military personnel, and intelligence practitioners that have direct impact to national security.",
            normalBalance: "Debit"
        },
        {
            word: "Extraordinary and Miscellaneous Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount paid for expenses incidental to the performance of official functions, such as: meetings and conferences, public relations, educational, cultural and athletic activities, membership fees in government organizations, etc.",
            normalBalance: "Debit"
        },
        {
            word: "Professional Services",
            typeOfAccount: "Expenses",
            definition: "These are fees paid to external service providers, such as consultants, lawyers, accountants, and other professionals, for specialized services required by a business.",
            normalBalance: "Debit"
        },
        {
            word: "Legal Services",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of authorized legal services rendered by private lawyers.",
            normalBalance: "Debit"
        },
        {
            word: "Auditing Services",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of operating expenses provided by auditees for auditing services rendered by the Commission on Audit.",
            normalBalance: "Debit"
        },
        {
            word: "Consultancy Services",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of services rendered by consultants contracted to perform particular outputs or services primarily advisory in nature and requiring highly specialized or technical expertise which cannot be provided by the regular staff of the entity.",
            normalBalance: "Debit"
        },
        {
            word: "Other Professional Services",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of other professional services contracted by the entity not otherwise classified under any of the specific professional services accounts.",
            normalBalance: "Debit"
        },
        {
            word: "General Services",
            typeOfAccount: "Expenses",
            definition: "It typically encompass a variety of miscellaneous costs related to the day-to-day operations of a business, including utilities, office supplies, postage, and other general administrative expenses.",
            normalBalance: "Debit"
        },
        {
            word: "Environment/Sanitary Services",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of services contracted for the upkeep and sanitation of the public places.",
            normalBalance: "Debit"
        },
        {
            word: "Janitorial Services",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of janitorial services contracted by the government.",
            normalBalance: "Debit"
        },
        {
            word: "Security Services",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of security services contracted by the government.",
            normalBalance: "Debit"
        },
        {
            word: "Other General Services",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of other general services contracted by the entity not otherwise classified under any of the specific general services accounts.",
            normalBalance: "Debit"
        },
        {
            word: "Repairs and Maintenance",
            typeOfAccount: "Expenses",
            definition: "It represent the costs incurred by a company to keep its assets in good operating condition, including routine maintenance, repairs, and minor improvements.",
            normalBalance: "Debit"
        },
        {
            word: "Repairs and Maintenance - Investment Property",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of repairs and maintenance on buildings/warehouses and other structures held for rent/lease or held for capital appreciation or both.",
            normalBalance: "Debit"
        },
        {
            word: "Repairs and Maintenance - Land Improvements",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of repairs and maintenance on aquaculture structures and other land improvements constructed/acquired/developed for public use.",
            normalBalance: "Debit"
        },
        {
            word: "Repairs and Maintenance - Infrastructure Assets",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of repairs and maintenance on road networks; flood control systems; sewer systems; water supply systems; and other infrastructure assets.",
            normalBalance: "Debit"
        },
        {
            word: "Repairs and Maintenance - Buildings and Other Structures",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of repairs and maintenance on office buildings; school buildings; hospitals and health centers; and other structures.",
            normalBalance: "Debit"
        },
        {
            word: "Repairs and Maintenance - Machinery and Equipment",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of repairs and maintenance on machinery; office equipment; and other machinery and equipment.",
            normalBalance: "Debit"
        },
        {
            word: "Repairs and Maintenance - Transportation Equipment",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of repairs and maintenance on motor vehicles; trains; aircrafts; watercrafts; and other transportation equipment.",
            normalBalance: "Debit"
        },
        {
            word: "Repairs and Maintenance - Furniture and Fixtures",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of repairs and maintenance on furniture and fixtures.",
            normalBalance: "Debit"
        },
        {
            word: "Repairs and Maintenance - Leased Assets",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of repairs and maintenance of buildings; and other leased assets acquired by a lessee under a finance lease contract/agreement.",
            normalBalance: "Debit"
        },
        {
            word: "Repairs and Maintenance - Leased Assets Improvements",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of repairs and maintenance of improvements on land, buildings and other assets occupied by a lessee under an operating lease.",
            normalBalance: "Debit"
        },
        {
            word: "Repairs and Maintenance - Other Property, Plant and Equipment",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of repairs and maintenance of other property, plant and equipment not falling under any of the specific property, plant and equipment account.",
            normalBalance: "Debit"
        },
        {
            word: "Financial Assistance/Subsidy",
            typeOfAccount: "Expenses",
            definition: "It refers to monetary support provided by governments, organizations, or individuals to help offset the costs of specific activities, projects, or expenses, often with the aim of promoting certain objectives or providing relief.",
            normalBalance: "Credit"
        },
        {
            word: "Subsidy to NGAs",
            typeOfAccount: "Expenses",
            definition: "This account is used by government corporations to recognize financial assistance to NGAs through transfer of funds or assets.",
            normalBalance: "Debit"
        },
        {
            word: "Subsidy to Other Local Government Units",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize financial assistance to LGUs through transfer of funds or assets for government programs/projects/activities.",
            normalBalance: "Debit"
        },
        {
            word: "Subsidy to Other Funds",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount of funds/assets transferred to other funds.",
            normalBalance: "Debit"
        },
        {
            word: "Subsidy to General Fund Proper/Special Accounts",
            typeOfAccount: "Expenses",
            definition: "This account is used to record transfers of funds from the general fund proper to an economic enterprise/special accounts of the same LGU.",
            normalBalance: "Debit"
        },
        {
            word: "Subsidy to Local Economic Enterprises",
            typeOfAccount: "Expenses",
            definition: "This account is used to record transfers of funds as subsidy from economic enterprises/public utility to the general fund proper or to another local economic enterprise/public utility of the same LGU.",
            normalBalance: "Debit"
        },
        {
            word: "Subsidies - Others",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the financial assistance given to individuals and institutions other than government entities or NGOs/POs for government programs/projects/activities.",
            normalBalance: "Debit"
        },
        {
            word: "Transfers",
            typeOfAccount: "Expenses",
            definition: "It represent the movement of funds or assets from one account to another within the same entity, without involving an exchange of cash or goods, and do not impact the total assets or liabilities.",
            normalBalance: "Credit (Debit)"
        },
        {
            word: "Transfers of Unspent Current Year DRRM Funds to the Trust Funds",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize transfers of unspent DRRMF allocations in the trust fund upon fulfillment of the condition for the transfer.",
            normalBalance: "Debit"
        },
        {
            word: "Transfers for Project Equity Share /LGU Counterpart",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize transfers of LGU counterpart or equity share upon fulfillment of the condition for the transfer.",
            normalBalance: "Debit"
        },
        {
            word: "Taxes, Duties and Licenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount of taxes, duties, licenses and other fees except income tax due to regulatory entities.",
            normalBalance: "Debit"
        },
        {
            word: "Fidelity Bond Premiums",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount of premiums paid by the entity for the fidelity bonds of accountable officers.",
            normalBalance: "Debit"
        },
        {
            word: "Insurance Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount of premiums paid by the entity for the insurable risks of government property.",
            normalBalance: "Debit"
        },
        {
            word: "Advertising Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the costs incurred for advertisement in newspapers, magazines, televisions, radio and other forms of media.",
            normalBalance: "Debit"
        },
        {
            word: "Printing and Publication Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the costs of printing and binding of manuscripts/documents, forms, manuals, brochures, pamphlets, and the like.",
            normalBalance: "Debit"
        },
        {
            word: "Representation Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the expenses incurred for official meetings/conferences and other official functions.",
            normalBalance: "Debit"
        },
        {
            word: "Transportation and Delivery Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of transporting goods/merchandise sold in the course of business operations.",
            normalBalance: "Debit"
        },
        {
            word: "Rent Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize rental/lease of land, buildings, facilities, equipment, vehicles, machineries, and the like.",
            normalBalance: "Debit"
        },
        {
            word: "Membership Dues and Contributions to Organizations",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize membership fees/dues/contributions by the entity and/or its officials and employees to recognized/authorized/accredited professional organizations as authorized in its approved annual budget.",
            normalBalance: "Debit"
        },
        {
            word: "Subscription Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of subscriptions to newspapers, libraries and other reading materials.",
            normalBalance: "Debit"
        },
        {
            word: "Donations",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount of donations to other levels of government and individuals and institutions.",
            normalBalance: "Debit"
        },
        {
            word: "Other Maintenance and Operating Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize other operating expenses not falling under any of the specific maintenance and other operating expense accounts.",
            normalBalance: "Debit"
        },
        {
            word: "Management Supervision/Trusteeship Fees",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount paid to an appointed person or institution that manages assets, including mutual funds and unit trusts, for the benefit of the government",
            normalBalance: "Debit"
        },
        {
            word: "Interest Expenses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize interest charges paid for the use of borrowed money.",
            normalBalance: "Debit"
        },
        {
            word: "Guarantee Fees",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize guarantee fee paid by a debtor government entity to the guarantor for the assurance to pay the entity's obligation to the creditor as stipulated in the guarantee clause.",
            normalBalance: "Debit"
        },
        {
            word: "Bank Charges",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the charges imposed by the bank for various services rendered excluding interest charges.",
            normalBalance: "Debit"
        },
        {
            word: "Commitment Fees",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the commitment charges imposed by creditors based on an agreed percentage of the undrawn loan amount with foreign or domestic lending institution.",
            normalBalance: "Debit"
        },
        {
            word: "Other Financial Charges",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the charges not falling under any of the specific financial expense accounts.",
            normalBalance: "Debit"
        },
        {
            word: "Direct Costs",
            typeOfAccount: "Expenses",
            definition: "It can be specifically attributed to a particular product, project, or department, including direct materials and direct labor, which are directly involved in the production of goods or services.",
            normalBalance: "Debit"
        },
        {
            word: "Cost of Goods Manufactured",
            typeOfAccount: "Expenses",
            definition: "It represents the total production costs incurred by a company during a specific period, including direct materials, direct labor, and manufacturing overhead, to produce goods that are ready for sale.",
            normalBalance: "Debit"
        },
        {
            word: "Direct Materials",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount of raw materials and component parts used in the production which costs are directly traceable to the products manufactured.",
            normalBalance: "Debit"
        },
        {
            word: "Direct Labor",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of payroll or part of wage-bill that can be specifically and consistently assigned to or associated with the manufacture of a product or a particular work order.",
            normalBalance: "Debit"
        },
        {
            word: "Manufacturing Overhead",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost incurred in the manufacture of a product other than the costs of direct materials and direct labor.",
            normalBalance: "Debit"
        },
        {
            word: "Cost of Sales",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the cost of merchandise purchased/manufactured and sold in the course of business operations.",
            normalBalance: "Debit"
        },
        {
            word: "Non-Cash Expenses",
            typeOfAccount: "Expenses",
            definition: "These are costs incurred by a business that do not involve an actual cash outflow, such as depreciation, amortization, and impairment charges.",
            normalBalance: "Debit"
        },
        {
            word: "Depreciation",
            typeOfAccount: "Expenses",
            definition: "The allocation of the cost of tangible assets over their useful lives, reflecting the asset's gradual loss of value due to wear and tear, obsolescence, or usage.",
            normalBalance: "Debit"
        },
        {
            word: "Depreciation - Investment Property",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the periodic allocation of cost for the wear and tear of buildings/warehouses and other structures held for rent/lease or held for capital appreciation or both in accordance with the prescribed policy on depreciation.",
            normalBalance: "Debit"
        },
        {
            word: "Depreciation - Land Improvements",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the periodic allocation of cost for the wear and tear of aquaculture structures and other land improvements constructed/acquired/developed for public use in accordance with the prescribed policy on depreciation.",
            normalBalance: "Debit"
        },
        {
            word: "Depreciation - Infrastructure Assets",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the periodic allocation of cost for the wear and tear of road networks; flood control systems; and other infrastructure assets in accordance with the prescribed policy on depreciation.",
            normalBalance: "Debit"
        },
        {
            word: "Depreciation - Buildings and Other Structures",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the periodic allocation of cost for the wear and tear of office buildings; school buildings; and other structures in accordance with the prescribed policy on depreciation.",
            normalBalance: "Debit"
        },
        {
            word: "Depreciation - Machinery and Equipment",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the periodic allocation of cost for the wear and tear of machinery; office equipment and other machinery and equipment in accordance with the prescribed policy on depreciation.",
            normalBalance: "Debit"
        },
        {
            word: "Depreciation - Transportation Equipment",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the periodic allocation of cost for the wear and tear of motor vehicles; trains; aircrafts; watercrafts; and other transportation equipment in accordance with the prescribed policy on depreciation.",
            normalBalance: "Debit"
        },
        {
            word: "Depreciation - Furniture, Fixtures and Books",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the periodic allocation of cost for the wear and tear of furniture and fixtures, and books in accordance with the prescribed policy on depreciation.",
            normalBalance: "Debit"
        },
        {
            word: "Depreciation - Leased Assets",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the periodic allocation of cost for the wear and tear of buildings, and other assets under finance lease contract/agreement in accordance with the prescribed policy on depreciation.",
            normalBalance: "Debit"
        },
        {
            word: "Depreciation - Leased Assets Improvements",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the periodic allocation of cost for the wear and tear of improvements on land, buildings and other leased assets used in operations under operating lease contract in accordance with the prescribed policy on depreciation.",
            normalBalance: "Debit"
        },
        {
            word: "Depreciation -Service Concession Assets",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the periodic allocation of cost for the wear and tear of service concession-road networks; service concession-flood control systems.",
            normalBalance: "Debit"
        },
        {
            word: "Depreciation - Other Property, Plant and Equipment",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the periodic allocation of cost for the wear and tear of other property, plant and equipment not falling under any of the specific Property, Plant and Equipment account in accordance with the prescribed policy on depreciation.",
            normalBalance: "Debit"
        },
        {
            word: "Amortization",
            typeOfAccount: "Expenses",
            definition: "Process of spreading the cost of an intangible asset over its useful life, typically through periodic charges to the income statement, reducing the asset's value on the balance sheet.",
            normalBalance: "Debit"
        },
        {
            word: "Amortization - Intangible Assets",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the periodic allocation of cost of intangible assets.",
            normalBalance: "Debit"
        },
        {
            word: "Impairment Loss",
            typeOfAccount: "Expenses",
            definition: "Occurs when the carrying amount of an asset exceeds its recoverable amount, leading to a reduction in the asset's value on the company's balance sheet.",
            normalBalance: "Debit"
        },
        {
            word: "Impairment Loss - Financial Assets Held to Maturity",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the loss incurred due to impairment of financial assets held to maturity.",
            normalBalance: "Debit"
        },
        {
            word: "Impairment Loss - Loans and Receivables",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the loss incurred due to impairment of loans and receivables and other financial assets where amortized cost is greater than the value of estimated future cash flows discounted at original effective interest rate.",
            normalBalance: "Debit"
        },
        {
            word: "Impairment Loss - Lease Receivables",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the loss incurred due to impairment of lease receivables.",
            normalBalance: "Debit"
        },
        {
            word: "Impairment Loss - Investments in GOCCs",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the loss incurred in writing down investments in government corporations below cost to fair value less costs to sell.",
            normalBalance: "Debit"
        },
        {
            word: "Impairment Loss - Investments in Joint Venture",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the loss incurred in writing down investments in joint venture below cost to fair value less costs to sell.",
            normalBalance: "Debit"
        },
        {
            word: "Impairment Loss - Other Receivables",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the loss incurred due to impairment of other receivables.",
            normalBalance: "Debit"
        },
        {
            word: "Impairment Loss - Inventories",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the loss incurred in writing down inventory value below cost to its net realizable value.",
            normalBalance: "Debit"
        },
        {
            word: "Impairment Loss - Investment Property",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the loss incurred due to impairment of property held for rental/lease or for capital appreciation where carrying amount is greater than depreciated replacement cost.",
            normalBalance: "Debit"
        },
        {
            word: "Impairment Loss - Property, Plant and Equipment",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the loss incurred due to impairment of property, plant and equipment where carrying amount is greater than depreciated replacement cost.",
            normalBalance: "Debit"
        },
        {
            word: "Impairment Loss - Intangible Assets",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the loss incurred due to impairment of intangible asset where carrying amount is greater than recoverable amount/recoverable service amount.",
            normalBalance: "Debit"
        },
        {
            word: "Losses",
            typeOfAccount: "Expenses",
            definition: "This account refer to decreases in a company's net assets or financial performance, typically resulting from expenses, costs, or declines in the value of assets, which reduce the company's overall profitability.",
            normalBalance: "Debit"
        },
        {
            word: "Loss on Foreign Exchange (FOREX)",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the losses arising from revaluation of assets and liabilities denominated in foreign currencies.",
            normalBalance: "Debit"
        },
        {
            word: "Loss on Sale of Investments",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize realized loss on sale/redemption/transfer of investments such as financial assets held for trading, financial assets designated at fair value through surplus/profit or deficit/loss and non-trading financial assets.",
            normalBalance: "Debit"
        },
        {
            word: "Loss on Sale of Investment Property",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount of loss on sale of investment property.",
            normalBalance: "Debit"
        },
        {
            word: "Loss on Sale of Propery, Plant and Equipment",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount of loss on sale of property, plant and equipment.",
            normalBalance: "Debit"
        },
        {
            word: "Loss on Sale of Biological Assets",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount of loss on sale of biological assets.",
            normalBalance: "Debit"
        },
        {
            word: "Loss on Sale of Intangible Assets",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount of loss on sale of intangible assets.",
            normalBalance: "Debit"
        },
        {
            word: "Loss on Sale of Assets",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount of loss on sale of assets.",
            normalBalance: "Debit"
        },
        {
            word: "Loss on Initial Recognition of Biological Assets",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize amount of loss incurred upon initial recognition of biological assets representing the cost to sell.",
            normalBalance: "Debit"
        },
        {
            word: "Loss of Assets",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize amount of loss suffered by government due to theft/fortuitous events/calamities/civil unrest and events of same nature for which relief has been granted.",
            normalBalance: "Debit"
        },
        {
            word: "Loss on Guaranty",
            typeOfAccount: "Expenses",
            definition: "This refers to losses incurred for guaranteed loans of government corporations as authorized by law or corporate body.",
            normalBalance: "Debit"
        },
        {
            word: "Other Losses",
            typeOfAccount: "Expenses",
            definition: "This account is used to recognize the amount of losses not falling under any of the specific loss accounts.",
            normalBalance: "Debit"
        },
        {
            word: "Grants",
            typeOfAccount: "Expenses",
            definition: "This account represent funds provided by an organization, government, or foundation to another entity, typically a nonprofit, for a specific purpose or project, with no expectation of repayment.",
            normalBalance: "Credit"
        },
        {
            word: "Grants for Concessionary loans",
            typeOfAccount: "Expenses",
            definition: "This account is used to record the difference between the loan proceeds and the fair value of the loan on initial recognition.",
            normalBalance: "Debit"
        }];


    const searchInput = document.getElementById("inp-word");
    const searchButton = document.getElementById("search-btn");
    const resultDiv = document.getElementById("result");

    function search() {
        const searchTerm = searchInput.value.toLowerCase();

        resultDiv.innerHTML = "";

        if (searchTerm.trim() === "") return;

        const filteredTerms = terms.filter(term => term.word.toLowerCase().includes(searchTerm));

        filteredTerms.forEach(term => {
            const termDiv = document.createElement("div");
            termDiv.classList.add("result-item");
            termDiv.innerHTML = `
                <div class="word">
                    <h3>${term.word}</h3>
                </div>
                <div class="type-of-account">
                    <p>Type of Account: ${term.typeOfAccount}</p>
                </div>
                <div class="definition">
                    <p>${term.definition}</p>
                </div>
                <div class="normal-balance">
                    <p>Normal Balance: ${term.normalBalance}</p>
                </div>
            `;
            resultDiv.appendChild(termDiv);
        });

        window.scrollTo({ top: resultDiv.offsetTop, behavior: 'smooth' });
    }
    searchButton.addEventListener("click", search);

    searchInput.addEventListener("input", search);
});
