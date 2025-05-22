Welcome to Pippin's Design Workflow! 🐶
Enter your project requirements below to generate the design.

Please specify the main features, target users, problem being solved, performance needs, security/compliance requirements, and integration requirements. Detailed information will help generate a comprehensive design.

Tip: Provide details as you would to a new teammate who just joined Amazon.

StyleByZaga presents Fashion and lifestyle
I have an idea to create a fashion and lifestyle brand business with website and app. We will be making custom and unique designs and apparels with other luxurious items and accessories, we will be doing luxurious shopping for high end customers and celebrities that have unique taste and need a personal concierge to style them. We will also parter with top brands and showcase luxurious items like cars, apartments, jewelries, private jets, red carpet prep and design. Also other luxurious personal concierge shoppers can sign up and register so customers and clients can pick who they want to pimp them up. I want this to be unique and one of a kind.
Start Design Generation
StyleByZaga Fashion and Lifestyle Platform - Low-Level Design Document
Executive Summary
StyleByZaga aims to create a premium fashion and lifestyle brand with a digital platform (website and app) focusing on:

Custom luxury apparel and accessories
Personal styling concierge services for high-end clients
Partnerships with luxury brands (cars, real estate, jewelry, private jets)
Marketplace for luxury personal shoppers
This document outlines the technical implementation strategy with focus on core decisions, AWS-based solutions, and a path to rapid development.

Core System Components

1. User Authentication & Profile Management
Options:

A) Amazon Cognito

Pros: Managed service, handles authentication flows, social login integration, scalable
Cons: Less customization for luxury UI elements, learning curve
B) Custom Java Authentication System

Pros: Full control over UX, customized onboarding
Cons: Time-consuming to build, security concerns, maintenance overhead
Decision: Use Amazon Cognito with custom UI elements

Provides secure, scalable authentication while allowing custom branding
Supports different user types (clients, stylists, admins)
Accelerates development with built-in features
2. E-commerce Platform
Options:

A) Custom-built solution

Pros: Full customization, unique luxury experience
Cons: Development time, maintenance overhead
B) AWS Amplify + custom components

Pros: Rapid development, built-in commerce components
Cons: Some limitations on customization
C) Headless commerce platform with custom frontend

Pros: Balance of customization and speed, separation of concerns
Cons: Integration complexity
Decision: Headless commerce approach using:

AWS AppSync (GraphQL API)
Amazon DynamoDB (product catalog, orders)
Custom React/React Native frontend
This provides the right balance of customization and development speed
3. Concierge Matching System
Options:

A) Rule-based matching algorithm

Pros: Simple implementation, predictable results
Cons: Less personalized, limited learning capability
B) AI/ML recommendation system (Amazon Personalize)

Pros: Improves over time, personalized matches
Cons: Requires training data, more complex implementation
Decision: Start with simple rule-based matching, then evolve to Amazon Personalize

Allows quick market entry while building dataset for future ML implementation
Personalization is critical for luxury clientele
4. Content Management System
Options:

A) Custom CMS

Pros: Tailored to luxury content needs
Cons: Development time, maintenance
B) AWS Amplify + Headless CMS

Pros: Quick setup, content API
Cons: Some customization limitations
Decision: AWS Amplify with headless CMS integration

Provides content APIs for both web and mobile
Enables marketing team to manage luxury content independently
Supports rich media needed for fashion presentation
5. Payment Processing
Options:

A) Stripe integration

Pros: Well-established, handles international payments, subscription support
Cons: Transaction fees, some customization limitations
B) Custom payment gateway integration

Pros: More control, potentially lower fees
Cons: PCI compliance challenges, development complexity
Decision: Stripe with custom UI elements

Provides secure, reliable payment processing
Supports high-value transactions and international payments
Reduces development time and compliance burden
Technical Architecture
┌───────────────┐     ┌───────────────┐     ┌───────────────┐
│  Web Frontend │     │ Mobile App    │     │ Admin Portal  │
│  (React)      │     │ (React Native)│     │ (React)       │
└───────┬───────┘     └───────┬───────┘     └───────┬───────┘
        │                     │                     │
        └─────────────┬───────┴─────────────┬───────┘
                      │                     │
                      ▼                     ▼
         ┌────────────────────┐   ┌──────────────────┐
         │ AWS AppSync        │   │ Amazon API       │
         │ (GraphQL API)      │   │ Gateway + Lambda │
         └──────┬─────────────┘   └────────┬─────────┘
                │                          │
    ┌───────────┴──────────┬──────────────┴───────────┐
    │                      │                          │
    ▼                      ▼                          ▼
┌─────────────┐    ┌─────────────────┐      ┌─────────────────┐
│ DynamoDB    │    │ Amazon S3       │      │ Amazon          │
│ (Data Store)│    │ (Media Storage) │      │ Personalize     │
└─────────────┘    └─────────────────┘      └─────────────────┘
        │                  │                         │
        └──────────────────┼─────────────────────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │ AWS Cognito     │
                  │ (Authentication)│
                  └─────────────────┘
Core Features Implementation

1. Luxury Product Catalog
Use DynamoDB for product data with complex attributes
S3 for high-resolution product images with CloudFront CDN
Implement advanced filtering and search with Elasticsearch
Product data model includes:
Standard attributes (name, price, description)
Rich media (multiple images, videos)
Brand partnerships and exclusivity flags
Availability and custom options
2. Stylist Marketplace
Profile system for personal shoppers/stylists
Portfolio showcase with previous work
Availability calendar and booking system
Rating and review system
Commission structure and payment processing
3. Concierge Service Management
Request intake system with detailed preferences
Stylist matching algorithm
Communication channel between client and stylist
Project tracking and milestone management
Approval workflows for selections and purchases
4. Luxury Brand Partnerships
Brand onboarding and management portal
Featured product placement system
Commission tracking and reporting
Analytics on customer engagement with partner brands
Development Roadmap
Phase 1: MVP (3 months)
Basic authentication and user profiles
Product catalog with luxury items
Simple stylist profiles and matching
Payment processing for purchases
Web platform launch
Phase 2: Enhanced Features (3 months)
Mobile app development
Advanced stylist marketplace
Improved recommendation engine
CRM integration for high-touch client management
Analytics dashboard
Phase 3: Scaling (3 months)
International expansion features
AI-powered style recommendations
Advanced partnership features
VIP client portal with exclusive access
Technical Considerations
Security
PCI DSS compliance for payment processing
Encryption for sensitive client information
Role-based access control
Regular security audits
Scalability
Serverless architecture for variable load handling
Global CDN for media delivery
Database sharding strategy for growth
Performance
Image optimization pipeline
API response time monitoring
Mobile performance optimization
Monitoring and Analytics
AWS CloudWatch for system monitoring
Custom event tracking for business metrics
A/B testing framework for UX optimization
Conclusion
This design leverages AWS services to accelerate development while maintaining the flexibility needed for a luxury brand experience. By focusing on core components and using managed services where appropriate, StyleByZaga can quickly bring its platform to market while establishing a technical foundation that supports future growth and feature expansion.

The architecture prioritizes:

Rapid time to market
Scalability for growing user base
Flexibility for luxury customizations
Security for high-value transactions
Performance for premium user experience
Technical Design Document: StyleByZaga Luxury Fashion & Lifestyle Platform

1. Executive Summary
StyleByZaga aims to disrupt the luxury fashion and lifestyle market by creating a comprehensive digital platform connecting high-end clients with personal stylists, luxury products, and exclusive experiences. The platform will serve celebrities, high-net-worth individuals, and luxury enthusiasts seeking personalized styling services and access to premium products across categories including apparel, accessories, vehicles, real estate, and private aviation.

This document outlines a scalable, secure AWS-based architecture designed to deliver a premium digital experience befitting a luxury brand. The solution leverages serverless technologies where appropriate to minimize operational overhead while maintaining the flexibility to scale with business growth. The platform will support web and mobile interfaces, sophisticated matching algorithms connecting clients with stylists, and secure payment processing for high-value transactions.

Key technical decisions include adopting a headless commerce architecture, implementing a hybrid authentication system, and building a foundation that can evolve from rule-based recommendations to machine learning as the platform matures. This approach balances the need for rapid market entry with the long-term vision of creating a distinctive luxury digital experience.

2. Strategic Context
Business Problem
The luxury fashion and personal styling industry currently operates through fragmented channels with inconsistent digital experiences. High-end clients face several challenges:

Limited access to skilled personal stylists outside major fashion centers
Difficulty discovering unique luxury items across multiple categories
Inconsistent service quality when working with personal shoppers
Time-consuming coordination across multiple luxury vendors
Lack of transparency in the personal styling process
StyleByZaga addresses these pain points by creating a centralized platform that connects clients with vetted stylists, provides access to exclusive products, and streamlines the luxury shopping experience.

Key Stakeholders
High-end clients - Expect flawless user experience, personalized service, and exclusive access
Personal stylists - Require tools to showcase portfolios, manage clients, and process transactions
Luxury brand partners - Need controlled presentation of their products and protection of brand equity
StyleByZaga business team - Requires analytics, operational controls, and platform management tools
Scale Requirements
While the target market is inherently exclusive, the platform must support:

100,000+ registered users in the initial phase, scaling to millions globally
Thousands of concurrent users during peak events (awards seasons, fashion weeks)
Tens of thousands of luxury product listings with rich media assets
Hundreds of personal stylists with detailed profiles and availability management
High-value transactions (potentially millions of dollars for premium items)
Global availability with particular focus on luxury markets (US, Europe, Middle East, Asia)
Critical Technical Constraints
Security and privacy - Protecting high-profile client information and transaction details
Performance - Delivering a responsive, premium experience across all devices
Scalability - Supporting growth without service degradation
Compliance - Meeting financial regulations for high-value transactions across jurisdictions
Brand consistency - Maintaining luxury experience across all touchpoints
3. Technical Architecture
System Overview
The StyleByZaga platform will be built on a modern, cloud-native architecture leveraging AWS services to ensure scalability, security, and operational efficiency. The architecture follows a microservices approach with clear domain boundaries to enable independent scaling and development of key system components.

┌─────────────────────────────────────────────────────────────────────────┐
│                           Client Applications                           │
│                                                                         │
│  ┌─────────────┐      ┌─────────────────┐      ┌─────────────────────┐  │
│  │  Web Client  │      │  iOS/Android    │      │  Admin Portal       │  │
│  │  (React.js)  │      │  (React Native) │      │  (React.js)         │  │
│  └─────────────┘      └─────────────────┘      └─────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
                │                 │                   │
                ▼                 ▼                   ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         API & Communication Layer                       │
│                                                                         │
│  ┌─────────────────┐  ┌────────────────┐  ┌──────────────────────────┐  │
│  │ Amazon API      │  │ AWS AppSync    │  │ Amazon CloudFront        │  │
│  │ Gateway         │  │ (GraphQL)      │  │ (CDN)                    │  │
│  └─────────────────┘  └────────────────┘  └──────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
                │                 │                   │
                ▼                 ▼                   ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                          Service Layer                                  │
│                                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ User        │  │ Product     │  │ Stylist     │  │ Concierge   │     │
│  │ Service     │  │ Service     │  │ Service     │  │ Service     │     │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘     │
│                                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ Order       │  │ Payment     │  │ Content     │  │ Analytics   │     │
│  │ Service     │  │ Service     │  │ Service     │  │ Service     │     │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘     │
└─────────────────────────────────────────────────────────────────────────┘
                │                 │                   │
                ▼                 ▼                   ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                           Data Layer                                    │
│                                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ Amazon      │  │ Amazon      │  │ Amazon      │  │ Amazon      │     │
│  │ DynamoDB    │  │ Aurora      │  │ S3          │  │ OpenSearch  │     │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘     │
│                                                                         │
│  ┌─────────────────────────┐      ┌───────────────────────────────┐     │
│  │ Amazon ElastiCache      │      │ Amazon Personalize            │     │
│  │ (Redis)                 │      │ (Recommendation Engine)       │     │
│  └─────────────────────────┘      └───────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────┘
Key Architectural Components

1. User Management & Authentication
The authentication system must support multiple user types (clients, stylists, admins) with varying permissions while providing a seamless experience.

Implementation:

Amazon Cognito will serve as the primary authentication provider, managing user pools, authentication flows, and token issuance.
Custom authentication flows will be implemented for VIP clients requiring white-glove onboarding.
JWT tokens will be used for session management with appropriate expiration policies.
Multi-factor authentication will be required for high-value transactions and admin access.
Social authentication will be supported for convenience while maintaining security standards.
This hybrid approach balances security requirements with the need for a frictionless luxury experience.

2. Product Catalog & Content Management
The product catalog must support complex product hierarchies, rich media assets, and dynamic content management across multiple luxury categories.

Implementation:

Amazon DynamoDB will store product metadata with access patterns optimized for browsing and searching.
Amazon S3 will store high-resolution images and videos with lifecycle policies.
Amazon CloudFront will deliver media assets with low latency globally.
Amazon OpenSearch Service will power advanced search capabilities with faceting and filtering.
Headless CMS (integrated with AWS Amplify) will enable marketing teams to manage content independently.
This approach provides the flexibility needed for a diverse luxury product catalog while maintaining performance at scale.

3. Stylist Marketplace & Matching
The platform must efficiently connect clients with appropriate stylists based on preferences, availability, and expertise.

Implementation:

Stylist profiles stored in DynamoDB with specialized indexes for matching queries.
Initial rule-based matching algorithm implemented via AWS Lambda functions.
Future ML-based matching using Amazon Personalize as data volume grows.
Real-time availability managed through DynamoDB streams and ElastiCache.
Booking and scheduling system using serverless workflows with Step Functions.
This progressive implementation allows for rapid market entry while building the foundation for more sophisticated matching as the platform matures.

4. Order Management & Payments
The system must handle complex transactions securely, including high-value purchases, deposits, and stylist commissions.

Implementation:

Payment processing through Stripe integration with custom hooks for fraud detection.
Order management using DynamoDB with transaction support for order consistency.
Commission calculation via Lambda functions triggered by order events.
Payment reconciliation system with audit trails and reporting.
Escrow capabilities for high-value transactions requiring additional security.
This approach provides the flexibility to handle various transaction types while maintaining security and compliance.

5. Communication & Messaging
Secure, reliable communication between clients and stylists is critical to the platform's success.

Implementation:

Real-time messaging using AWS AppSync subscriptions and WebSockets.
Message persistence in DynamoDB with appropriate TTL for privacy.
Media sharing capabilities for style recommendations and approvals.
Notification system using Amazon SNS with multiple delivery channels (push, email, SMS).
Communication analytics to measure response times and engagement.
This system enables the high-touch communication expected in luxury services while maintaining privacy and security.

Scalability Considerations
The architecture is designed to scale in multiple dimensions:

Horizontal scaling of stateless services via AWS Lambda and container-based services.
Read scaling through DynamoDB global tables and Aurora read replicas for global presence.
Media delivery scaling via CloudFront's global edge network.
Capacity planning for predictable events (fashion weeks, award seasons) using AWS Auto Scaling.
Database partitioning strategy to prevent hot keys and ensure consistent performance.
4. Implementation Strategy
Phase 1: Foundation (MVP)
The initial implementation will focus on core capabilities to enable market entry and begin building the StyleByZaga brand.

Key Components:

User authentication and profile management
Basic product catalog with luxury items
Simple stylist profiles and manual matching
Secure payment processing
Web platform with responsive design
Technical Approach:

Set up AWS environment with proper security controls and CI/CD pipelines
Implement core user management with Amazon Cognito
Build product catalog using DynamoDB and S3
Create basic stylist profiles and discovery mechanism
Integrate Stripe for payment processing
Develop responsive web interface using React
Success Criteria:

Successful user registration and authentication
Product browsing and search functionality
Stylist discovery and contact initiation
Secure payment processing
Basic analytics implementation
Phase 2: Enhanced Experience
The second phase will focus on enriching the platform with features that enhance the luxury experience.

Key Components:

Mobile applications (iOS and Android)
Advanced stylist marketplace with ratings and portfolios
Improved product discovery and recommendations
Client-stylist communication tools
Enhanced analytics and reporting
Technical Approach:

Develop mobile applications using React Native with shared business logic
Enhance stylist profiles with portfolio management and availability
Implement basic recommendation engine using collaborative filtering
Build real-time messaging using AWS AppSync
Expand analytics capabilities with customer journey tracking
Success Criteria:

Mobile app adoption metrics
Increased stylist-client matching quality
Higher engagement through messaging platform
Improved conversion rates through recommendations
Phase 3: Intelligence & Scale
The third phase will introduce advanced capabilities and prepare the platform for global scale.

Key Components:

AI-powered style recommendations
Advanced partnership features for luxury brands
International expansion with localization
VIP client portal with exclusive features
Enhanced security for ultra-high-value transactions
Technical Approach:

Implement Amazon Personalize for advanced recommendations
Build brand partner portal and integration APIs
Enhance platform with localization and multi-currency support
Develop VIP experience with dedicated infrastructure
Implement advanced security measures for high-value transactions
Success Criteria:

Recommendation engine accuracy metrics
Brand partner onboarding and engagement
International user acquisition and retention
VIP client satisfaction and retention
Security compliance across all regions
5. Operational Considerations
Monitoring and Observability
A comprehensive monitoring strategy is essential for maintaining the premium experience expected by luxury clients.

Implementation:

Amazon CloudWatch for infrastructure and application monitoring
AWS X-Ray for distributed tracing across services
Custom dashboards for business and technical KPIs
Real-time alerting with appropriate escalation paths
User experience monitoring with synthetic transactions
SLAs and Targets:

99.99% availability for core platform functions
Sub-200ms API response times for critical paths
100% transaction integrity for payments
< 5 second image loading times globally for high-resolution assets
Security and Compliance
Given the high-profile nature of clients and high-value transactions, security is paramount.

Implementation:

AWS Shield Advanced for DDoS protection
AWS WAF with custom rules for application protection
Amazon GuardDuty for threat detection
AWS KMS for encryption of sensitive data
Regular penetration testing and security audits
PCI DSS compliance for payment handling
GDPR and CCPA compliance for personal data
Disaster Recovery
A robust disaster recovery strategy will ensure business continuity.

Implementation:

Multi-region deployment for critical components
Regular backups with cross-region replication
Automated recovery procedures with minimal RTO/RPO
Chaos engineering practices to validate resilience
Documented incident response procedures
Recovery Objectives:

RTO (Recovery Time Objective): < 1 hour for critical functions
RPO (Recovery Point Objective): < 5 minutes for transaction data
Cost Management
While delivering a premium experience, cost efficiency remains important for business sustainability.

Implementation:

Reserved Instances for predictable workloads
Spot Instances for non-critical background processing
Serverless architecture for optimal resource utilization
Data lifecycle policies for cost-effective storage
Regular cost reviews and optimization
6. Alternatives Analysis
Several architectural approaches were considered before arriving at the recommended design.

Authentication Approach
Options Considered:

Fully custom authentication system

Pros: Complete control over UX, branding, and flows
Cons: Development time, security risks, maintenance burden
Third-party auth provider (Auth0, Okta)

Pros: Robust security, quick implementation
Cons: Ongoing costs, less control over luxury experience
Amazon Cognito with custom UI (selected)

Pros: Balance of security, cost, and customization
Cons: Some limitations in flow customization
Decision Rationale: Amazon Cognito provides the security foundation needed while allowing sufficient customization for a luxury experience. The implementation time savings compared to a custom solution allows for focus on differentiating features.

Database Architecture
Options Considered:

Relational database (Amazon Aurora)

Pros: Familiar model, strong consistency, complex queries
Cons: Scaling challenges, less flexibility for evolving schema
NoSQL-only approach (DynamoDB)

Pros: Horizontal scaling, flexible schema
Cons: Limited query capabilities, eventual consistency challenges
Hybrid approach (selected)

Pros: Right tool for each data pattern, optimized performance
Cons: Increased complexity, data synchronization challenges
Decision Rationale: The hybrid approach allows us to leverage the strengths of different database technologies for specific use cases. DynamoDB provides the scalability needed for product catalog and user profiles, while Aurora handles complex relational data for financial transactions and reporting.

API Architecture
Options Considered:

REST-only API

Pros: Widely understood, simpler caching
Cons: Multiple round trips, over-fetching data
GraphQL-only API (AWS AppSync)

Pros: Flexible queries, reduced network traffic
Cons: Complexity, potential performance issues with complex queries
Hybrid API approach (selected)

Pros: Optimized for different use cases, better performance
Cons: Increased development complexity, multiple endpoints
Decision Rationale: The hybrid approach uses GraphQL (via AppSync) for client-facing applications where query flexibility is valuable, while using REST APIs for admin functions and integrations where simplicity is preferred.

7. Success Metrics
Technical KPIs
Performance Metrics

Page load time < 2 seconds (95th percentile)
API response time < 200ms (95th percentile)
Image loading time < 5 seconds for high-resolution assets
Reliability Metrics

Platform availability > 99.99%
Successful transaction rate > 99.9%
Recovery time from failures < 1 hour
Security Metrics

100% of sensitive data encrypted at rest and in transit
Security vulnerabilities addressed within SLA timeframes
Zero data breaches or unauthorized access incidents
Business KPIs
User Engagement

User retention rate > 80% for high-value clients
Average session duration > 5 minutes
Return frequency > 2 visits per week for active users
Transaction Metrics

Conversion rate from browsing to purchase > 5%
Average order value meeting business targets
Stylist match satisfaction rating > 4.5/5
Platform Growth

Monthly active user growth rate > 10%
Stylist onboarding and retention meeting targets
Brand partnership growth meeting quarterly objectives
Monitoring and Reporting
A comprehensive dashboard will be implemented to track these metrics in real-time, with:

Executive summary view for leadership
Detailed technical metrics for engineering teams
Business performance indicators for product and marketing teams
Automated alerts for metrics falling below thresholds
Conclusion
The proposed architecture for StyleByZaga provides a solid foundation for building a premium fashion and lifestyle platform that can scale globally while maintaining the exclusive experience expected by luxury clients. By leveraging AWS services strategically, we can accelerate time to market while building a platform that can evolve with the business.

The phased implementation approach allows for rapid market entry while establishing the technical foundation for more advanced features. The architecture balances immediate business needs with long-term scalability and flexibility, positioning StyleByZaga to become a leader in the digital luxury fashion and lifestyle space.

Key to success will be maintaining the premium user experience throughout the platform while ensuring the security and privacy expected by high-profile clients. The recommended architecture achieves this balance through thoughtful component selection and a focus on operational excellence.

StyleByZaga API Specification in Smithy
namespace com.stylebyzaga

use aws.protocols#restJson1

/// StyleByZaga Luxury Fashion & Lifestyle Platform API
@restJson1
service StyleByZagaAPI {
    version: "2023-10-01"
    operations: [
        // User Management
        CreateUser
        GetUser
        UpdateUser
        DeleteUser
        AuthenticateUser

        // Stylist Management
        CreateStylist
        GetStylist
        UpdateStylist
        DeleteStylist
        ListStylists
        GetStylistAvailability
        UpdateStylistAvailability
        
        // Matching
        MatchClientWithStylists
        RequestStylist
        AcceptClientRequest
        DeclineClientRequest
        
        // Product Management
        CreateProduct
        GetProduct
        UpdateProduct
        DeleteProduct
        ListProducts
        SearchProducts
        
        // Order Management
        CreateOrder
        GetOrder
        UpdateOrder
        CancelOrder
        ListOrders
        
        // Payment Management
        ProcessPayment
        RefundPayment
        GetPaymentStatus
        
        // Communication
        SendMessage
        GetMessages
        GetConversation
        MarkMessageAsRead
        
        // Content Management
        CreateContent
        GetContent
        UpdateContent
        DeleteContent
        ListContent
        
        // Analytics
        GetUserAnalytics
        GetStylistAnalytics
        GetProductAnalytics
        GetPlatformMetrics
    ]
}

// ======== User Management ========

@readonly
@http(method: "GET", uri: "/users/{userId}")
operation GetUser {
    input: GetUserInput
    output: GetUserOutput
    errors: [
        ResourceNotFoundException
        AccessDeniedException
        InternalServerException
    ]
}

structure GetUserInput {
    @required
    @httpLabel
    userId: String
}

structure GetUserOutput {
    @required
    user: User
}

@http(method: "POST", uri: "/users")
operation CreateUser {
    input: CreateUserInput
    output: CreateUserOutput
    errors: [
        ValidationException
        ConflictException
        InternalServerException
    ]
}

structure CreateUserInput {
    @required
    email: String
    @required
    firstName: String
    @required
    lastName: String
    phoneNumber: String
    preferences: UserPreferences
    userType: UserType
}

structure CreateUserOutput {
    @required
    userId: String
    @required
    user: User
}

@http(method: "PUT", uri: "/users/{userId}")
operation UpdateUser {
    input: UpdateUserInput
    output: UpdateUserOutput
    errors: [
        ResourceNotFoundException
        ValidationException
        AccessDeniedException
        InternalServerException
    ]
}

structure UpdateUserInput {
    @required
    @httpLabel
    userId: String
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    preferences: UserPreferences
}

structure UpdateUserOutput {
    @required
    user: User
}

@http(method: "DELETE", uri: "/users/{userId}")
operation DeleteUser {
    input: DeleteUserInput
    output: DeleteUserOutput
    errors: [
        ResourceNotFoundException
        AccessDeniedException
        InternalServerException
    ]
}

structure DeleteUserInput {
    @required
    @httpLabel
    userId: String
}

structure DeleteUserOutput {
    success: Boolean
}

@http(method: "POST", uri: "/auth/login")
operation AuthenticateUser {
    input: AuthenticateUserInput
    output: AuthenticateUserOutput
    errors: [
        ValidationException
        UnauthorizedException
        InternalServerException
    ]
}

structure AuthenticateUserInput {
    @required
    email: String
    @required
    password: String
    mfaCode: String
}

structure AuthenticateUserOutput {
    @required
    accessToken: String
    @required
    refreshToken: String
    @required
    expiresIn: Integer
    @required
    user: User
}

// ======== Stylist Management ========

@http(method: "POST", uri: "/stylists")
operation CreateStylist {
    input: CreateStylistInput
    output: CreateStylistOutput
    errors: [
        ValidationException
        ConflictException
        InternalServerException
    ]
}

structure CreateStylistInput {
    @required
    userId: String
    @required
    bio: String
    @required
    specialties: SpecialtiesList
    portfolio: PortfolioItems
    experienceYears: Integer
    rate: Money
}

structure CreateStylistOutput {
    @required
    stylistId: String
    @required
    stylist: Stylist
}

@readonly
@http(method: "GET", uri: "/stylists/{stylistId}")
operation GetStylist {
    input: GetStylistInput
    output: GetStylistOutput
    errors: [
        ResourceNotFoundException
        InternalServerException
    ]
}

structure GetStylistInput {
    @required
    @httpLabel
    stylistId: String
}

structure GetStylistOutput {
    @required
    stylist: Stylist
}

@http(method: "PUT", uri: "/stylists/{stylistId}")
operation UpdateStylist {
    input: UpdateStylistInput
    output: UpdateStylistOutput
    errors: [
        ResourceNotFoundException
        ValidationException
        AccessDeniedException
        InternalServerException
    ]
}

structure UpdateStylistInput {
    @required
    @httpLabel
    stylistId: String
    bio: String
    specialties: SpecialtiesList
    portfolio: PortfolioItems
    experienceYears: Integer
    rate: Money
}

structure UpdateStylistOutput {
    @required
    stylist: Stylist
}

@http(method: "DELETE", uri: "/stylists/{stylistId}")
operation DeleteStylist {
    input: DeleteStylistInput
    output: DeleteStylistOutput
    errors: [
        ResourceNotFoundException
        AccessDeniedException
        InternalServerException
    ]
}

structure DeleteStylistInput {
    @required
    @httpLabel
    stylistId: String
}

structure DeleteStylistOutput {
    success: Boolean
}

@readonly
@http(method: "GET", uri: "/stylists")
operation ListStylists {
    input: ListStylistsInput
    output: ListStylistsOutput
    errors: [
        ValidationException
        InternalServerException
    ]
}

structure ListStylistsInput {
    nextToken: String
    maxResults: Integer = 20
    specialties: SpecialtiesList
    minExperienceYears: Integer
    maxRate: Money
}

structure ListStylistsOutput {
    @required
    stylists: StylistList
    nextToken: String
}

@readonly
@http(method: "GET", uri: "/stylists/{stylistId}/availability")
operation GetStylistAvailability {
    input: GetStylistAvailabilityInput
    output: GetStylistAvailabilityOutput
    errors: [
        ResourceNotFoundException
        InternalServerException
    ]
}

structure GetStylistAvailabilityInput {
    @required
    @httpLabel
    stylistId: String
    @required
    startDate: Timestamp
    @required
    endDate: Timestamp
}

structure GetStylistAvailabilityOutput {
    @required
    availability: AvailabilitySlots
}

@http(method: "PUT", uri: "/stylists/{stylistId}/availability")
operation UpdateStylistAvailability {
    input: UpdateStylistAvailabilityInput
    output: UpdateStylistAvailabilityOutput
    errors: [
        ResourceNotFoundException
        ValidationException
        AccessDeniedException
        InternalServerException
    ]
}

structure UpdateStylistAvailabilityInput {
    @required
    @httpLabel
    stylistId: String
    @required
    availability: AvailabilitySlots
}

structure UpdateStylistAvailabilityOutput {
    @required
    availability: AvailabilitySlots
}

// ======== Matching ========

@readonly
@http(method: "GET", uri: "/matching/stylists")
operation MatchClientWithStylists {
    input: MatchClientWithStylistsInput
    output: MatchClientWithStylistsOutput
    errors: [
        ValidationException
        InternalServerException
    ]
}

structure MatchClientWithStylistsInput {
    @required
    clientId: String
    specialties: SpecialtiesList
    maxRate: Money
    locationPreference: String
    stylePreferences: StylePreferencesList
}

structure MatchClientWithStylistsOutput {
    @required
    matches: StylistMatchList
}

@http(method: "POST", uri: "/matching/request")
operation RequestStylist {
    input: RequestStylistInput
    output: RequestStylistOutput
    errors: [
        ResourceNotFoundException
        ValidationException
        ConflictException
        InternalServerException
    ]
}

structure RequestStylistInput {
    @required
    clientId: String
    @required
    stylistId: String
    @required
    requestedDate: Timestamp
    requestedDuration: Integer
    message: String
}

structure RequestStylistOutput {
    @required
    requestId: String
    @required
    status: RequestStatus
}

@http(method: "POST", uri: "/matching/accept")
operation AcceptClientRequest {
    input: AcceptClientRequestInput
    output: AcceptClientRequestOutput
    errors: [
        ResourceNotFoundException
        ValidationException
        AccessDeniedException
        InternalServerException
    ]
}

structure AcceptClientRequestInput {
    @required
    requestId: String
    @required
    stylistId: String
    message: String
}

structure AcceptClientRequestOutput {
    @required
    requestId: String
    @required
    status: RequestStatus
    @required
    bookingDetails: BookingDetails
}

@http(method: "POST", uri: "/matching/decline")
operation DeclineClientRequest {
    input: DeclineClientRequestInput
    output: DeclineClientRequestOutput
    errors: [
        ResourceNotFoundException
        ValidationException
        AccessDeniedException
        InternalServerException
    ]
}

structure DeclineClientRequestInput {
    @required
    requestId: String
    @required
    stylistId: String
    reason: String
    alternativeDates: TimestampList
}

structure DeclineClientRequestOutput {
    @required
    requestId: String
    @required
    status: RequestStatus
}

// ======== Product Management ========

@http(method: "POST", uri: "/products")
operation CreateProduct {
    input: CreateProductInput
    output: CreateProductOutput
    errors: [
        ValidationException
        ConflictException
        InternalServerException
    ]
}

structure CreateProductInput {
    @required
    name: String
    @required
    description: String
    @required
    price: Money
    @required
    category: String
    @required
    brand: String
    images: ImageList
    attributes: ProductAttributes
    inventory: Integer
}

structure CreateProductOutput {
    @required
    productId: String
    @required
    product: Product
}

@readonly
@http(method: "GET", uri: "/products/{productId}")
operation GetProduct {
    input: GetProductInput
    output: GetProductOutput
    errors: [
        ResourceNotFoundException
        InternalServerException
    ]
}

structure GetProductInput {
    @required
    @httpLabel
    productId: String
}

structure GetProductOutput {
    @required
    product: Product
}

@http(method: "PUT", uri: "/products/{productId}")
operation UpdateProduct {
    input: UpdateProductInput
    output: UpdateProductOutput
    errors: [
        ResourceNotFoundException
        ValidationException
        AccessDeniedException
        InternalServerException
    ]
}

structure UpdateProductInput {
    @required
    @httpLabel
    productId: String
    name: String
    description: String
    price: Money
    category: String
    brand: String
    images: ImageList
    attributes: ProductAttributes
    inventory: Integer
}

structure UpdateProductOutput {
    @required
    product: Product
}

@http(method: "DELETE", uri: "/products/{productId}")
operation DeleteProduct {
    input: DeleteProductInput
    output: DeleteProductOutput
    errors: [
        ResourceNotFoundException
        AccessDeniedException
        InternalServerException
    ]
}

structure DeleteProductInput {
    @required
    @httpLabel
    productId: String
}

structure DeleteProductOutput {
    success: Boolean
}

@readonly
@http(method: "GET", uri: "/products")
operation ListProducts {
    input: ListProductsInput
    output: ListProductsOutput
    errors: [
        ValidationException
        InternalServerException
    ]
}

structure ListProductsInput {
    nextToken: String
    maxResults: Integer = 20
    category: String
    brand: String
    minPrice: Money
    maxPrice: Money
}

structure ListProductsOutput {
    @required
    products: ProductList
    nextToken: String
}

@readonly
@http(method: "GET", uri: "/products/search")
operation SearchProducts {
    input: SearchProductsInput
    output: SearchProductsOutput
    errors: [
        ValidationException
        InternalServerException
    ]
}

structure SearchProductsInput {
    @required
    query: String
    filters: ProductFilters
    nextToken: String
    maxResults: Integer = 20
}

structure SearchProductsOutput {
    @required
    products: ProductList
    facets: ProductFacets
    nextToken: String
}

// ======== Order Management ========

@http(method: "POST", uri: "/orders")
operation CreateOrder {
    input: CreateOrderInput
    output: CreateOrderOutput
    errors: [
        ValidationException
        ResourceNotFoundException
        InternalServerException
    ]
}

structure CreateOrderInput {
    @required
    clientId: String
    @required
    items: OrderItemList
    stylistId: String
    shippingAddress: Address
    billingAddress: Address
    paymentMethodId: String
}

structure CreateOrderOutput {
    @required
    orderId: String
    @required
    order: Order
    paymentRequired: Boolean
}

@readonly
@http(method: "GET", uri: "/orders/{orderId}")
operation GetOrder {
    input: GetOrderInput
    output: GetOrderOutput
    errors: [
        ResourceNotFoundException
        AccessDeniedException
        InternalServerException
    ]
}

structure GetOrderInput {
    @required
    @httpLabel
    orderId: String
}

structure GetOrderOutput {
    @required
    order: Order
}

@http(method: "PUT", uri: "/orders/{orderId}")
operation UpdateOrder {
    input: UpdateOrderInput
    output: UpdateOrderOutput
    errors: [
        ResourceNotFoundException
        ValidationException
        AccessDeniedException
        InternalServerException
    ]
}

structure UpdateOrderInput {
    @required
    @httpLabel
    orderId: String
    status: OrderStatus
    shippingAddress: Address
    billingAddress: Address
    items: OrderItemList
}

structure UpdateOrderOutput {
    @required
    order: Order
}

@http(method: "POST", uri: "/orders/{orderId}/cancel")
operation CancelOrder {
    input: CancelOrderInput
    output: CancelOrderOutput
    errors: [
        ResourceNotFoundException
        ValidationException
        AccessDeniedException
        InternalServerException
    ]
}

structure CancelOrderInput {
    @required
    @httpLabel
    orderId: String
    reason: String
}

structure CancelOrderOutput {
    @required
    order: Order
    refundId: String
}

@readonly
@http(method: "GET", uri: "/orders")
operation ListOrders {
    input: ListOrdersInput
    output: ListOrdersOutput
    errors: [
        ValidationException
        AccessDeniedException
        InternalServerException
    ]
}

structure ListOrdersInput {
    clientId: String
    stylistId: String
    status: OrderStatus
    startDate: Timestamp
    endDate: Timestamp
    nextToken: String
    maxResults: Integer = 20
}

structure ListOrdersOutput {
    @required
    orders: OrderList
    nextToken: String
}

// ======== Payment Management ========

@http(method: "POST", uri: "/payments/process")
operation ProcessPayment {
    input: ProcessPaymentInput
    output: ProcessPaymentOutput
    errors: [
        ValidationException
        PaymentException
        ResourceNotFoundException
        InternalServerException
    ]
}

structure ProcessPaymentInput {
    @required
    orderId: String
    @required
    paymentMethodId: String
    amount: Money
    currency: String = "USD"
    savePaymentMethod: Boolean = false
}

structure ProcessPaymentOutput {
    @required
    paymentId: String
    @required
    status: PaymentStatus
    transactionId: String
}

@http(method: "POST", uri: "/payments/refund")
operation RefundPayment {
    input: RefundPaymentInput
    output: RefundPaymentOutput
    errors: [
        ValidationException
        PaymentException
        ResourceNotFoundException
        AccessDeniedException
        InternalServerException
    ]
}

structure RefundPaymentInput {
    @required
    paymentId: String
    @required
    amount: Money
    reason: String
}

structure RefundPaymentOutput {
    @required
    refundId: String
    @required
    status: RefundStatus
}

@readonly
@http(method: "GET", uri: "/payments/{paymentId}/status")
operation GetPaymentStatus {
    input: GetPaymentStatusInput
    output: GetPaymentStatusOutput
    errors: [
        ResourceNotFoundException
        AccessDeniedException
        InternalServerException
    ]
}

structure GetPaymentStatusInput {
    @required
    @httpLabel
    paymentId: String
}

structure GetPaymentStatusOutput {
    @required
    paymentId: String
    @required
    status: PaymentStatus
    @required
    amount: Money
    @required
    createdAt: Timestamp
    updatedAt: Timestamp
}

// ======== Communication ========

@http(method: "POST", uri: "/messages")
operation SendMessage {
    input: SendMessageInput
    output: SendMessageOutput
    errors: [
        ValidationException
        ResourceNotFoundException
        AccessDeniedException
        InternalServerException
    ]
}

structure SendMessageInput {
    @required
    senderId: String
    @required
    recipientId: String
    @required
    content: String
    attachments: AttachmentList
}

structure SendMessageOutput {
    @required
    messageId: String
    @required
    conversationId: String
    @required
    timestamp: Timestamp
}

@readonly
@http(method: "GET", uri: "/messages")
operation GetMessages {
    input: GetMessagesInput
    output: GetMessagesOutput
    errors: [
        ValidationException
        AccessDeniedException
        InternalServerException
    ]
}

structure GetMessagesInput {
    @required
    userId: String
    conversationId: String
    startDate: Timestamp
    endDate: Timestamp
    nextToken: String
    maxResults: Integer = 50
}

structure GetMessagesOutput {
    @required
    messages: MessageList
    nextToken: String
}

@readonly
@http(method: "GET", uri: "/conversations/{conversationId}")
operation GetConversation {
    input: GetConversationInput
    output: GetConversationOutput
    errors: [
        ResourceNotFoundException
        AccessDeniedException
        InternalServerException
    ]
}

structure GetConversationInput {
    @required
    @httpLabel
    conversationId: String
    nextToken: String
    maxResults: Integer = 50
}

structure GetConversationOutput {
    @required
    conversation: Conversation
    @required
    messages: MessageList
    nextToken: String
}

@http(method: "PUT", uri: "/messages/{messageId}/read")
operation MarkMessageAsRead {
    input: MarkMessageAsReadInput
    output: MarkMessageAsReadOutput
    errors: [
        ResourceNotFoundException
        AccessDeniedException
        InternalServerException
    ]
}

structure MarkMessageAsReadInput {
    @required
    @httpLabel
    messageId: String
    @required
    userId: String
}

structure MarkMessageAsReadOutput {
    success: Boolean
}

// ======== Content Management ========

@http(method: "POST", uri: "/content")
operation CreateContent {
    input: CreateContentInput
    output: CreateContentOutput
    errors: [
        ValidationException
        AccessDeniedException
        InternalServerException
    ]
}

structure CreateContentInput {
    @required
    title: String
    @required
    contentType: ContentType
    @required
    body: String
    tags: StringList
    status: ContentStatus = "DRAFT"
    featuredImage: String
    author: String
}

structure CreateContentOutput {
    @required
    contentId: String
    @required
    content: Content
}

@readonly
@http(method: "GET", uri: "/content/{contentId}")
operation GetContent {
    input: GetContentInput
    output: GetContentOutput
    errors: [
        ResourceNotFoundException
        InternalServerException
    ]
}

structure GetContentInput {
    @required
    @httpLabel
    contentId: String
}

structure GetContentOutput {
    @required
    content: Content
}

@http(method: "PUT", uri: "/content/{contentId}")
operation UpdateContent {
    input: UpdateContentInput
    output: UpdateContentOutput
    errors: [
        ResourceNotFoundException
        ValidationException
        AccessDeniedException
        InternalServerException
    ]
}

structure UpdateContentInput {
    @required
    @httpLabel
    contentId: String
    title: String
    body: String
    tags: StringList
    status: ContentStatus
    featuredImage: String
}

structure UpdateContentOutput {
    @required
    content: Content
}

@http(method: "DELETE", uri: "/content/{contentId}")
operation DeleteContent {
    input: DeleteContentInput
    output: DeleteContentOutput
    errors: [
        ResourceNotFoundException
        AccessDeniedException
        InternalServerException
    ]
}

structure DeleteContentInput {
    @required
    @httpLabel
    contentId: String
}

structure DeleteContentOutput {
    success: Boolean
}

@readonly
@http(method: "GET", uri: "/content")
operation ListContent {
    input: ListContentInput
    output: ListContentOutput
    errors: [
        ValidationException
        InternalServerException
    ]
}

structure ListContentInput {
    contentType: ContentType
    status: ContentStatus
    tags: StringList
    nextToken: String
    maxResults: Integer = 20
}

structure ListContentOutput {
    @required
    content: ContentList
    nextToken: String
}

// ======== Analytics ========

@readonly
@http(method: "GET", uri: "/analytics/users/{userId}")
operation GetUserAnalytics {
    input: GetUserAnalyticsInput
    output: GetUserAnalyticsOutput
    errors: [
        ResourceNotFoundException
        AccessDeniedException
        InternalServerException
    ]
}

structure GetUserAnalyticsInput {
    @required
    @httpLabel
    userId: String
    @required
    startDate: Timestamp
    @required
    endDate: Timestamp
    metrics: StringList
}

structure GetUserAnalyticsOutput {
    @required
    analytics: AnalyticsData
}

@readonly
@http(method: "GET", uri: "/analytics/stylists/{stylistId}")
operation GetStylistAnalytics {
    input: GetStylistAnalyticsInput
    output: GetStylistAnalyticsOutput
    errors: [
        ResourceNotFoundException
        AccessDeniedException
        InternalServerException
    ]
}

structure GetStylistAnalyticsInput {
    @required
    @httpLabel
    stylistId: String
    @required
    startDate: Timestamp
    @required
    endDate: Timestamp
    metrics: StringList
}

structure GetStylistAnalyticsOutput {
    @required
    analytics: AnalyticsData
}

@readonly
@http(method: "GET", uri: "/analytics/products/{productId}")
operation GetProductAnalytics {
    input: GetProductAnalyticsInput
    output: GetProductAnalyticsOutput
    errors: [
        ResourceNotFoundException
        AccessDeniedException
        InternalServerException
    ]
}

structure GetProductAnalyticsInput {
    @required
    @httpLabel
    productId: String
    @required
    startDate: Timestamp
    @required
    endDate: Timestamp
    metrics: StringList
}

structure GetProductAnalyticsOutput {
    @required
    analytics: AnalyticsData
}

@readonly
@http(method: "GET", uri: "/analytics/platform")
operation GetPlatformMetrics {
    input: GetPlatformMetricsInput
    output: GetPlatformMetricsOutput
    errors: [
        AccessDeniedException
        InternalServerException
    ]
}

structure GetPlatformMetricsInput {
    @required
    startDate: Timestamp
    @required
    endDate: Timestamp
    metrics: StringList
}

structure GetPlatformMetricsOutput {
    @required
    metrics: AnalyticsData
}

// ======== Data Models ========

structure User {
    @required
    userId: String
    @required
    email: String
    @required
    firstName: String
    @required
    lastName: String
    phoneNumber: String
    @required
    userType: UserType
    preferences: UserPreferences
    @required
    createdAt: Timestamp
    updatedAt: Timestamp
}

structure UserPreferences {
    stylePreferences: StylePreferencesList
    sizePreferences: SizePreferences
    colorPreferences: StringList
    brandPreferences: StringList
    communicationPreferences: CommunicationPreferences
}

structure SizePreferences {
    topSize: String
    bottomSize: String
    shoeSize: String
    dressSize: String
}

structure CommunicationPreferences {
    emailNotifications: Boolean
    smsNotifications: Boolean
    pushNotifications: Boolean
    marketingCommunications: Boolean
}

structure Stylist {
    @required
    stylistId: String
    @required
    userId: String
    @required
    firstName: String
    @required
    lastName: String
    @required
    bio: String
    @required
    specialties: SpecialtiesList
    @required
    experienceYears: Integer
    @required
    rate: Money
    portfolio: PortfolioItems
    rating: Float
    reviewCount: Integer
    @required
    createdAt: Timestamp
    updatedAt: Timestamp
}

structure PortfolioItem {
    @required
    itemId: String
    @required
    title: String
    @required
    imageUrl: String
    description: String
    clientName: String
    date: Timestamp
    tags: StringList
}

structure AvailabilitySlot {
    @required
    slotId: String
    @required
    startTime: Timestamp
    @required
    endTime: Timestamp
    @required
    status: SlotStatus
}

structure StylistMatch {
    @required
    stylist: Stylist
    @required
    matchScore: Float
    @required
    availability: AvailabilitySlots
}

structure BookingDetails {
    @required
    bookingId: String
    @required
    clientId: String
    @required
    stylistId: String
    @required
    startTime: Timestamp
    @required
    endTime: Timestamp
    @required
    status: BookingStatus
    location: String
    notes: String
}

structure Product {
    @required
    productId: String
    @required
    name: String
    @required
    description: String
    @required
    price: Money
    @required
    category: String
    @required
    brand: String
    @required
    images: ImageList
    attributes: ProductAttributes
    inventory: Integer
    @required
    createdAt: Timestamp
    updatedAt: Timestamp
}

structure ProductAttributes {
    color: String
    size: String
    material: String
    dimensions: String
    weight: String
    additionalAttributes: Document
}

structure ProductFilters {
    categories: StringList
    brands: StringList
    priceRange: PriceRange
    colors: StringList
    sizes: StringList
}

structure PriceRange {
    @required
    min: Float
    @required
    max: Float
}

structure ProductFacets {
    categories: FacetCounts
    brands: FacetCounts
    priceRanges: FacetCounts
    colors: FacetCounts
    sizes: FacetCounts
}

structure FacetCount {
    @required
    value: String
    @required
    count: Integer
}

structure Order {
    @required
    orderId: String
    @required
    clientId: String
    stylistId: String
    @required
    items: OrderItemList
    @required
    totalAmount: Money
    @required
    status: OrderStatus
    shippingAddress: Address
    billingAddress: Address
    paymentId: String
    @required
    createdAt: Timestamp
    updatedAt: Timestamp
}

structure OrderItem {
    @required
    productId: String
    @required
    quantity: Integer
    @required
    unitPrice: Money
    @required
    totalPrice: Money
    customizations: String
}

structure Address {
    @required
    line1: String
    line2: String
    @required
    city: String
    @required
    state: String
    @required
    postalCode: String
    @required
    country: String
    phoneNumber: String
}

structure Money {
    @required
    amount: Float
    @required
    currency: String
}

structure Message {
    @required
    messageId: String
    @required
    conversationId: String
    @required
    senderId: String
    @required
    recipientId: String
    @required
    content: String
    attachments: AttachmentList
    @required
    timestamp: Timestamp
    @required
    status: MessageStatus
}

structure Attachment {
    @required
    attachmentId: String
    @required
    type: AttachmentType
    @required
    url: String
    name: String
    size: Integer
}

structure Conversation {
    @required
    conversationId: String
    @required
    participants: StringList
    @required
    lastMessageTimestamp: Timestamp
    @required
    lastMessage: String
    unreadCount: Integer
}

structure Content {
    @required
    contentId: String
    @required
    title: String
    @required
    contentType: ContentType
    @required
    body: String
    @required
    status: ContentStatus
    tags: StringList
    featuredImage: String
    author: String
    @required
    createdAt: Timestamp
    updatedAt: Timestamp
}

structure AnalyticsDataPoint {
    @required
    timestamp: Timestamp
    @required
    metricName: String
    @required
    value: Float
}

// ======== Enums ========

@enum([
    {
        value: "CLIENT",
        name: "Client"
    },
    {
        value: "STYLIST",
        name: "Stylist"
    },
    {
        value: "ADMIN",
        name: "Admin"
    }
])
enum UserType {
    CLIENT
    STYLIST
    ADMIN
}

@enum([
    {
        value: "AVAILABLE",
        name: "Available"
    },

I'll create comprehensive architecture diagrams based on the provided content and API specification.

1. Component Diagram
External Services

Data Layer

Service Layer

API & Communication Layer

Client Layer

Web Client (React.js)

Mobile Client (React Native)

Admin Portal (React.js)

Amazon API Gateway

AWS AppSync (GraphQL)

Amazon CloudFront (CDN)

User Service

Stylist Service

Product Service

Order Service

Payment Service

Matching Service

Messaging Service

Content Service

Analytics Service

Amazon DynamoDB

Amazon Aurora

Amazon S3

Amazon OpenSearch

Amazon ElastiCache (Redis)

Amazon Personalize

Stripe Payment API

Email Service (SES)

SMS Service (SNS)

2. Sequence Diagram: User Authentication Flow
DynamoDB
Cognito
UserService
APIGateway
Client
DynamoDB
Cognito
UserService
APIGateway
Client
alt
[Authentication Successful]
[MFA Required]
[Authentication Failed]
POST /auth/login (email, password)
AuthenticateUser
InitiateAuth
Authentication Result
Get User Details
User Data
Return Tokens and User Data
200 OK (accessToken, refreshToken, user)
MFA Challenge
200 OK (MFA Challenge)
POST /auth/login (email, password, mfaCode)
AuthenticateUser with MFA
RespondToAuthChallenge
Authentication Result
Get User Details
User Data
Return Tokens and User Data
200 OK (accessToken, refreshToken, user)
Authentication Error
401 Unauthorized
3. Sequence Diagram: Stylist Matching Process
Personalize
DynamoDB
StylistService
MatchingService
APIGateway
Client
Personalize
DynamoDB
StylistService
MatchingService
APIGateway
Client
alt
[Using ML-based Matching]
[Using Rule-based Matching]
GET /matching/stylists (preferences)
MatchClientWithStylists
Get Client Preferences
Client Data
Get Recommendations
Recommended Stylist IDs
Query Stylists by Criteria
Matching Stylists
Get Stylist Details
Query Stylist Profiles
Stylist Data
Stylist Profiles
Get Stylist Availability
Query Availability
Availability Data
Availability Slots
Return Matched Stylists
200 OK (matches)
POST /matching/request (stylistId, date)
RequestStylist
Create Booking Request
Request Created
Return Request ID
200 OK (requestId, status)
4. Sequence Diagram: Order Creation and Payment Process
StripeAPI
DynamoDB
PaymentService
ProductService
OrderService
APIGateway
Client
StripeAPI
DynamoDB
PaymentService
ProductService
OrderService
APIGateway
Client
alt
[Payment Successful]
[Payment Failed]
POST /orders (items, addresses)
CreateOrder
Validate Products
Get Product Details
Product Data
Validated Products
Create Order
Order Created
Return Order Details
200 OK (orderId, order, paymentRequired)
POST /payments/process (orderId, paymentMethodId)
ProcessPayment
Get Order Details
Query Order
Order Data
Order Details
Create Payment Intent
Payment Result
Update Payment Status
Status Updated
Update Order Status
Update Order
Order Updated
Return Payment Success
200 OK (paymentId, status)
Payment Error
400 Bad Request (error)
5. Data Flow Diagram: Product Catalog and Search
Data Storage

Service Layer

API Layer

Client Applications

GET /products

GET /products/search

Request Images

GET /products

GET /products/search

Request Images

ListProducts

SearchProducts

Query Products

Execute Search

Get Product Details

Serve Images

POST /products

CreateProduct

Store Product Data

Store Images

Index Product

Web Client

Mobile Client

API Gateway

CloudFront CDN

Product Service

Search Service

DynamoDB (Product Metadata)

S3 (Product Images)

OpenSearch (Search Index)

Admin Portal

6. Data Flow Diagram: Messaging System
External Services

Data Storage

Service Layer

API Layer

Client Applications

Send Message

Mutation: SendMessage

Store Message

Store Attachments

Trigger Notification

Send Push

Send Email

Deliver Push

Stream Events

Subscription

Get Messages

GetMessages

Query Messages

Get Attachments

Mark as Read

MarkMessageAsRead

Update Status

Client App

Stylist App

API Gateway

AppSync (GraphQL)

Message Service

Notification Service

DynamoDB (Messages)

S3 (Attachments)

Amazon SNS

Amazon SES

Mobile Push

These diagrams provide a comprehensive visualization of the StyleByZaga platform architecture, showing the component relationships, key interaction sequences, and data flows across the system. The architecture follows AWS best practices with a focus on scalability, security, and the premium experience required for a luxury fashion platform.

CRRE Best Practices for StyleByZaga Luxury Fashion & Lifestyle Platform
Based on the technical design document for StyleByZaga, here are the most relevant CRRE best practices that should be incorporated into the project:

1. Monitor key metric targets for each API
Why it's relevant: The StyleByZaga platform will have multiple critical APIs serving different functions (user management, product catalog, stylist matching, payments). The design mentions performance targets like "sub-200ms API response times" but needs comprehensive monitoring.

How to apply: Document and monitor availability and latency targets for each API endpoint across all services (User Service, Product Service, Stylist Service, etc.). Set up CloudWatch alarms to trigger SEV-2 tickets before service degradation impacts customers, especially for the luxury clientele who expect premium performance.

2. Implement canary tests
Why it's relevant: The platform serves high-profile clients with high-value transactions. Some features (like ultra-luxury item purchases or VIP services) may have low traffic but are critically important.

How to apply: Implement canary tests that regularly run against production to test the end-to-end availability and performance of critical user journeys, especially for low-traffic but high-value paths like high-value transactions and VIP features mentioned in Phase 3. These canaries should verify both functionality and performance SLAs.

3. Do regular fault testing
Why it's relevant: The architecture relies on multiple AWS services and dependencies. Failures in any component could impact the premium experience expected by luxury clients.

How to apply: Implement fault injection testing using tools like Gremlin to simulate failures in dependencies (DynamoDB, Stripe payments, S3 for media assets). The design mentions "chaos engineering practices" but should specifically test how the system behaves when dependencies experience availability drops or latency increases, especially for the payment processing and media delivery components.

4. Verify data recovery expectations
Why it's relevant: The design specifies RTO < 1 hour and RPO < 5 minutes, but needs validation of these objectives.

How to apply: Regularly test that data recovery processes actually meet the stated RTO and RPO objectives, especially for critical data like transaction records and client profiles. Document procedures for recovering from catastrophic data loss and practice these procedures to ensure they work as expected.

5. Document availability levers
Why it's relevant: During peak events (fashion weeks, awards seasons) mentioned in the scale requirements, the platform may experience traffic spikes.

How to apply: Implement and document availability levers that can provide at least 10% additional effective traffic capacity without scaling the fleet. For example, the platform could implement load shedding for non-critical features (like detailed analytics or recommendation refreshes) during peak periods to prioritize core shopping and stylist communication functions.

6. Do not fail on non-critical dependencies
Why it's relevant: The platform has multiple dependencies, some critical (payment processing) and others non-critical (recommendation engine, certain content features).

How to apply: Architect the system to gracefully degrade when non-critical dependencies fail. For example, if the recommendation engine (Amazon Personalize) is slow or unavailable, the platform should still allow browsing and purchasing with default or cached recommendations rather than failing the entire experience.

7. Keep dependency call timeouts tight
Why it's relevant: The platform makes calls to multiple services and dependencies, including third-party services like Stripe for payments.

How to apply: Implement tight timeouts around dependency calls based on actual metrics, especially for the payment processing service and stylist matching service. Each dependency call should have a smaller timeout than what clients expect when calling the service.

8. Limit retries in aggregate
Why it's relevant: The microservices architecture with multiple dependencies could lead to cascading retry storms if not properly managed.

How to apply: Implement proper retry policies across all services, especially for critical paths like payment processing. Use at most one retry per primary call to dependencies and don't retry on overload conditions. Publish retry metrics to monitor retry rates across the system.

9. Implement fast draining of long queues
Why it's relevant: The system will handle messaging between clients and stylists, which could build up during outages or high-load periods.

How to apply: For the messaging and communication components, implement mechanisms to quickly drain long queues by prioritizing or dropping less important messages when recovering from an overload situation. This is particularly important for the real-time messaging using AWS AppSync mentioned in the design.

10. Maintain and follow your runbook
Why it's relevant: The platform handles high-value transactions and serves high-profile clients, making incident response critical.

How to apply: Develop comprehensive runbooks for all alarm conditions, particularly for payment processing issues, security incidents, and availability problems. These runbooks should guide on-call engineers through diagnosis and resolution steps, with clear escalation paths to management when needed.

11. Test alarm and response mechanisms
Why it's relevant: The design specifies high availability targets (99.99%) and emphasizes the premium experience expected by luxury clients.

How to apply: Regularly test alarm and response mechanisms to ensure that on-call engineers receive notifications and can quickly respond to incidents. Before each on-call rotation, engineers should test their pagers and practice responding to simulated incidents.

12. Ensure sequence limits will never be reached
Why it's relevant: The platform will likely use incremented sequences for order IDs, transaction IDs, and other critical identifiers.

How to apply: Use appropriately sized data types (e.g., 64-bit unsigned integers) for all sequence identifiers to ensure they can never be exhausted during the lifetime of the system. This is particularly important for the order management and payment processing components that will handle high-value transactions.

By incorporating these CRRE best practices, StyleByZaga can build a robust, reliable platform that delivers the premium experience expected by its luxury clientele while maintaining operational excellence and resilience.

StyleByZaga Implementation Plan
Implementation Sequence Overview
Foundation Setup
User Management & Authentication
Product Catalog & Content Management
Stylist Marketplace Core
Order Management & Payments
Communication & Messaging
Mobile Application Development
Advanced Features & Intelligence
Operational Infrastructure

1. Foundation Setup
User Story
As a development team, we need to establish the AWS infrastructure foundation so that we can build a secure, scalable platform for StyleByZaga.

Scope and Boundaries
AWS account setup and configuration
Network architecture and security setup
CI/CD pipeline implementation
Base infrastructure as code (IaC)
Dependencies and Prerequisites
AWS account with appropriate permissions
Development team with AWS expertise
Defined security requirements and compliance standards
Implementation Approach
Create AWS organization structure with separate accounts for development, staging, and production
Set up VPC architecture with public and private subnets
Configure security groups, NACLs, and IAM policies
Implement CloudFormation/Terraform templates for infrastructure
Set up CI/CD pipelines using AWS CodePipeline or GitHub Actions
Configure monitoring and logging with CloudWatch
Establish backup and disaster recovery procedures
Technologies and Services
AWS Organizations, IAM, VPC
AWS CloudFormation or Terraform
AWS CodePipeline, CodeBuild, CodeDeploy
GitHub Actions (optional alternative)
AWS CloudWatch, CloudTrail
AWS Backup
Potential Challenges and Solutions
Challenge: Complex IAM permissions management Solution: Use AWS SSO and implement least privilege principle with regular access reviews
Challenge: Infrastructure drift over time Solution: Enforce infrastructure as code for all changes with automated compliance checks
Acceptance Criteria
All infrastructure is deployed via IaC with version control
CI/CD pipelines successfully deploy changes to dev environment
Security controls pass initial audit review
Monitoring and alerting are functional
Development team can access resources appropriately
2. User Management & Authentication
User Story
As a StyleByZaga user (client, stylist, or admin), I need to securely register, log in, and manage my profile so that I can access appropriate platform features.

Scope and Boundaries
User registration and authentication flows
Profile management
Role-based access control
Password policies and MFA
Social login integration
VIP onboarding process
Dependencies and Prerequisites
Foundation infrastructure
UX/UI designs for authentication flows
Defined user roles and permissions
Implementation Approach
Configure Amazon Cognito user pools for different user types
Implement custom authentication UI with React
Create API endpoints for user profile management
Develop role-based access control system
Set up MFA for high-security operations
Implement social login providers
Create VIP user onboarding workflow with manual verification process
Develop admin portal for user management
Technologies and Services
Amazon Cognito
AWS Lambda for custom authentication flows
Amazon DynamoDB for user profiles
AWS AppSync/API Gateway for profile APIs
React for frontend authentication UI
AWS KMS for encryption
Potential Challenges and Solutions
Challenge: Balancing security with user experience for luxury clients Solution: Implement tiered authentication with simplified flows for common actions and stronger verification for sensitive operations
Challenge: VIP onboarding requiring manual verification Solution: Build workflow system with notifications for staff and status tracking for users
Acceptance Criteria
Users can register using email or social accounts
Authentication is secure with appropriate password policies
MFA is enforced for sensitive operations
User profiles store all necessary information
Admin can manage users and roles
VIP onboarding process works with manual verification
JWT tokens are properly secured and refreshed
3. Product Catalog & Content Management
User Story
As a StyleByZaga admin, I need to manage a comprehensive product catalog with rich media assets so that clients can discover and purchase luxury items.

Scope and Boundaries
Product data model and storage
Category management
Media asset management
Product search and filtering
Content management system
Product visibility controls
Dependencies and Prerequisites
User authentication system
AWS infrastructure foundation
Product data schema definition
Implementation Approach
Design and implement DynamoDB schema for product catalog
Set up S3 buckets for media storage with appropriate access controls
Configure CloudFront for global media delivery
Implement OpenSearch for product search functionality
Develop admin interfaces for product management
Create API endpoints for product CRUD operations
Implement category management system
Set up content management workflows for marketing materials
Technologies and Services
Amazon DynamoDB for product metadata
Amazon S3 for media storage
Amazon CloudFront for content delivery
Amazon OpenSearch Service for search functionality
AWS Lambda for backend processing
React for admin interfaces
AWS Amplify for headless CMS capabilities
Potential Challenges and Solutions
Challenge: Managing high-resolution images and videos efficiently Solution: Implement media processing pipeline with automatic resizing and optimization
Challenge: Complex product relationships and attributes Solution: Design flexible schema with GSIs in DynamoDB to support various access patterns
Acceptance Criteria
Admins can create, update, and delete products
Products can be organized in categories and subcategories
Rich media assets are stored securely and delivered efficiently
Product search works with filters and facets
Content management system allows non-technical users to update marketing content
Product visibility can be controlled (public, VIP-only, etc.)
4. Stylist Marketplace Core
User Story
As a StyleByZaga client, I need to discover, evaluate, and connect with personal stylists so that I can receive personalized fashion advice.

Scope and Boundaries
Stylist profiles and portfolios
Stylist discovery and search
Availability management
Initial matching algorithm
Booking system
Dependencies and Prerequisites
User authentication system
Product catalog basics
UX/UI designs for stylist marketplace
Implementation Approach
Design and implement stylist profile schema in DynamoDB
Create APIs for stylist profile management
Develop portfolio management system for stylists
Implement availability calendar functionality
Build rule-based matching algorithm using Lambda
Create stylist search and filtering functionality
Implement booking and scheduling system
Develop stylist dashboard for managing clients and appointments
Technologies and Services
Amazon DynamoDB for stylist profiles and availability
AWS Lambda for matching algorithm
Amazon OpenSearch for stylist search
AWS Step Functions for booking workflows
Amazon ElastiCache (Redis) for availability caching
React for frontend interfaces
Potential Challenges and Solutions
Challenge: Complex availability patterns for stylists across time zones Solution: Implement calendar system with time zone support and conflict resolution
Challenge: Effective matching between clients and stylists Solution: Start with rule-based matching, collect data for future ML implementation
Acceptance Criteria
Stylists can create and manage comprehensive profiles
Stylists can upload portfolio items and manage availability
Clients can search for stylists based on various criteria
Matching algorithm suggests appropriate stylists for clients
Clients can book appointments with stylists
Stylists receive notifications about booking requests
Booking system prevents scheduling conflicts
5. Order Management & Payments
User Story
As a StyleByZaga user, I need to securely process payments for products and services so that I can complete transactions within the platform.

Scope and Boundaries
Payment processing integration
Order management system
Commission calculation
Refund and cancellation workflows
Transaction history and receipts
High-value transaction security
Dependencies and Prerequisites
User authentication system
Product catalog
Stylist marketplace basics
Payment processor accounts (Stripe)
Implementation Approach
Integrate Stripe for payment processing
Design and implement order schema in DynamoDB
Create order management APIs
Implement commission calculation logic
Develop workflow for order fulfillment
Build refund and cancellation processes
Implement transaction history and receipt generation
Create enhanced security measures for high-value transactions
Develop admin dashboard for order management
Technologies and Services
Stripe API for payment processing
Amazon DynamoDB for order data
AWS Lambda for business logic
AWS Step Functions for order workflows
Amazon SNS for notifications
AWS KMS for payment data encryption
AWS WAF for transaction security
Potential Challenges and Solutions
Challenge: Securing high-value transactions Solution: Implement additional verification steps and fraud detection for transactions above thresholds
Challenge: Complex commission structures Solution: Build flexible commission calculation system with rules engine
Acceptance Criteria
Users can securely process payments using multiple methods
Orders are tracked from creation to fulfillment
Commissions are correctly calculated for stylists
Refunds and cancellations follow proper approval workflows
Users can view their transaction history
Receipts are automatically generated
High-value transactions require additional verification
Admins can manage and audit all transactions
6. Communication & Messaging
User Story
As a StyleByZaga client or stylist, I need to communicate securely within the platform so that I can discuss style preferences, recommendations, and arrangements.

Scope and Boundaries
Real-time messaging system
Media sharing in messages
Message history and search
Notification system
Communication analytics
Dependencies and Prerequisites
User authentication system
Stylist-client relationships
Media storage infrastructure
Implementation Approach
Implement real-time messaging using AWS AppSync and GraphQL subscriptions
Set up DynamoDB for message persistence
Create message UI components for web application
Implement media sharing functionality within messages
Develop notification system using SNS
Create message search functionality
Implement read receipts and typing indicators
Build analytics for communication patterns
Technologies and Services
AWS AppSync for GraphQL API and subscriptions
Amazon DynamoDB for message storage
Amazon S3 for shared media
Amazon SNS for notifications
Amazon Pinpoint for push notifications
Amazon Comprehend for message analytics (optional)
WebSockets for real-time communication
Potential Challenges and Solutions
Challenge: Ensuring message delivery reliability Solution: Implement message queuing and delivery confirmation system
Challenge: Scaling real-time communications Solution: Use WebSockets with appropriate connection management and DynamoDB streams
Acceptance Criteria
Users can send and receive messages in real-time
Messages persist between sessions
Users can share images and other media in messages
Users receive notifications for new messages
Message history can be searched
Read receipts and typing indicators work correctly
System collects analytics on response times and engagement
7. Mobile Application Development
User Story
As a StyleByZaga user, I need mobile applications on iOS and Android so that I can access the platform on the go.

Scope and Boundaries
Mobile app architecture
Core functionality implementation
Native integrations
Offline capabilities
Push notifications
App store deployment
Dependencies and Prerequisites
Web platform core functionality
API endpoints for all features
UX/UI designs for mobile
Implementation Approach
Set up React Native project with shared business logic
Implement authentication flow for mobile
Create core screens (home, browse, stylist, profile, messages)
Integrate with native capabilities (camera, notifications)
Implement offline mode for critical features
Set up push notifications with Amazon Pinpoint
Create CI/CD pipeline for mobile builds
Prepare and submit apps to app stores
Technologies and Services
React Native for cross-platform development
AWS Amplify for mobile backend integration
Amazon Pinpoint for push notifications
AWS AppSync for offline data synchronization
Amazon S3 for media storage
Fastlane for CI/CD and app deployment
Potential Challenges and Solutions
Challenge: Maintaining consistent experience across platforms Solution: Use platform-specific UI components where appropriate while sharing business logic
Challenge: Handling offline scenarios Solution: Implement offline-first architecture with local storage and sync when online
Acceptance Criteria
Apps function correctly on iOS and Android
Authentication works seamlessly
Core features match web functionality
Native integrations (camera, notifications) work properly
Apps handle offline scenarios gracefully
Push notifications deliver correctly
Apps pass app store review guidelines
8. Advanced Features & Intelligence
User Story
As a StyleByZaga user, I need intelligent recommendations and advanced features so that I can have a more personalized and efficient experience.

Scope and Boundaries
Recommendation engine
Style preference learning
Personalized content
Advanced matching algorithm
VIP client features
International features
Dependencies and Prerequisites
Core platform functionality
Sufficient user data for training models
Infrastructure for ML workloads
Implementation Approach
Set up data collection pipeline for user preferences and behaviors
Implement Amazon Personalize for product recommendations
Develop style profile questionnaire and analysis
Create ML-based stylist matching algorithm
Implement personalized content delivery
Build VIP client portal with exclusive features
Add localization and multi-currency support
Develop advanced analytics dashboard
Technologies and Services
Amazon Personalize for recommendation engine
Amazon SageMaker for custom ML models
AWS Glue for ETL processes
Amazon Translate for localization
Amazon Comprehend for text analysis
AWS Lambda for serving ML predictions
Amazon DynamoDB for preference storage
Potential Challenges and Solutions
Challenge: Cold start problem for new users Solution: Implement hybrid approach with content-based recommendations for new users
Challenge: Building effective ML models with limited initial data Solution: Start with rule-based approaches, gradually transition to ML as data accumulates
Acceptance Criteria
Users receive personalized product recommendations
Stylist matching quality improves over time
Content is personalized based on user preferences
VIP clients have access to exclusive features
Platform supports multiple languages and currencies
Analytics provide insights into recommendation effectiveness
9. Operational Infrastructure
User Story
As a StyleByZaga operations team, we need comprehensive monitoring, security, and management tools so that we can maintain a high-quality platform experience.

Scope and Boundaries
Monitoring and alerting
Security controls and compliance
Performance optimization
Cost management
Disaster recovery
Admin dashboards
Dependencies and Prerequisites
All core platform components
Defined operational procedures
Security and compliance requirements
Implementation Approach
Implement comprehensive CloudWatch monitoring
Set up X-Ray for distributed tracing
Configure GuardDuty and Security Hub for security monitoring
Implement automated scaling policies
Create custom dashboards for technical and business KPIs
Set up cost allocation tags and budgets
Implement disaster recovery procedures
Create admin portal with operational controls
Technologies and Services
Amazon CloudWatch for monitoring
AWS X-Ray for tracing
Amazon GuardDuty for threat detection
AWS Security Hub for compliance
AWS Trusted Advisor for optimization
AWS Cost Explorer and Budgets
AWS Backup for disaster recovery
Grafana or QuickSight for dashboards
Potential Challenges and Solutions
Challenge: Balancing comprehensive monitoring with cost Solution: Implement tiered monitoring with critical paths having detailed metrics
Challenge: Managing security across multiple services Solution: Use Security Hub to centralize security findings and automate remediation
Acceptance Criteria
All critical components have appropriate monitoring
Alerts notify the team of potential issues
Security controls meet compliance requirements
Performance meets or exceeds defined SLAs
Cost tracking provides visibility into resource usage
Disaster recovery procedures are tested and functional
Admin portal provides necessary operational controls
This implementation plan provides a structured approach to building the StyleByZaga platform, breaking down the complex system into manageable components with clear dependencies and implementation steps. Each section can be provided to an AI coding assistant as a separate task, with the necessary context to implement the specific component.

AWS CDK TypeScript Implementation for StyleByZaga Platform
Here's the AWS CDK code implementation for the StyleByZaga luxury fashion platform based on the technical design document:

import *as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import* as cognito from 'aws-cdk-lib/aws-cognito';
import *as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import* as lambda from 'aws-cdk-lib/aws-lambda';
import *as apigw from 'aws-cdk-lib/aws-apigateway';
import* as appsync from 'aws-cdk-lib/aws-appsync';
import *as s3 from 'aws-cdk-lib/aws-s3';
import* as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import *as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import* as rds from 'aws-cdk-lib/aws-rds';
import *as ec2 from 'aws-cdk-lib/aws-ec2';
import* as opensearch from 'aws-cdk-lib/aws-opensearchservice';
import *as elasticache from 'aws-cdk-lib/aws-elasticache';
import* as iam from 'aws-cdk-lib/aws-iam';
import *as sns from 'aws-cdk-lib/aws-sns';
import* as sqs from 'aws-cdk-lib/aws-sqs';
import *as waf from 'aws-cdk-lib/aws-wafv2';
import* as route53 from 'aws-cdk-lib/aws-route53';
import *as acm from 'aws-cdk-lib/aws-certificatemanager';
import* as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';
import *as tasks from 'aws-cdk-lib/aws-stepfunctions-tasks';
import* as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import *as kms from 'aws-cdk-lib/aws-kms';
import* as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export class StyleByZagaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // VPC for secure networking
    const vpc = new ec2.Vpc(this, 'StyleByZagaVPC', {
      maxAzs: 3,
      natGateways: 3,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'public',
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: 'private',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
        {
          cidrMask: 24,
          name: 'isolated',
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
        }
      ]
    });

    // KMS Key for encryption
    const encryptionKey = new kms.Key(this, 'StyleByZagaEncryptionKey', {
      enableKeyRotation: true,
      description: 'Encryption key for StyleByZaga sensitive data',
      alias: 'alias/stylebyzaga-encryption'
    });

    // S3 Buckets
    const assetsBucket = new s3.Bucket(this, 'StyleByZagaAssets', {
      versioned: true,
      encryption: s3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      lifecycleRules: [
        {
          transitions: [
            {
              storageClass: s3.StorageClass.INTELLIGENT_TIERING,
              transitionAfter: cdk.Duration.days(30),
            }
          ]
        }
      ],
      cors: [
        {
          allowedMethods: [s3.HttpMethods.GET, s3.HttpMethods.PUT, s3.HttpMethods.POST],
          allowedOrigins: ['*'], // To be restricted in production
          allowedHeaders: ['*'],
          maxAge: 3000,
        },
      ],
    });

    // CloudFront Distribution for assets
    const distribution = new cloudfront.Distribution(this, 'StyleByZagaDistribution', {
      defaultBehavior: {
        origin: new origins.S3Origin(assetsBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD,
      },
      enableLogging: true,
      logBucket: new s3.Bucket(this, 'StyleByZagaCloudfrontLogs'),
      logFilePrefix: 'cloudfront-logs/',
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
        }
      ],
    });

    // Cognito User Pool
    const userPool = new cognito.UserPool(this, 'StyleByZagaUserPool', {
      selfSignUpEnabled: true,
      userVerification: {
        emailSubject: 'Verify your email for StyleByZaga',
        emailBody: 'Thank you for signing up to StyleByZaga. Your verification code is {####}',
        emailStyle: cognito.VerificationEmailStyle.CODE,
      },
      standardAttributes: {
        email: { required: true, mutable: true },
        phoneNumber: { required: false, mutable: true },
        fullname: { required: false, mutable: true },
      },
      customAttributes: {
        'userType': new cognito.StringAttribute({ mutable: true }),
        'stylistSpecialty': new cognito.StringAttribute({ mutable: true }),
      },
      passwordPolicy: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireDigits: true,
        requireSymbols: true,
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    // Add domain to Cognito
    const userPoolDomain = userPool.addDomain('StyleByZagaDomain', {
      cognitoDomain: {
        domainPrefix: 'stylebyzaga',
      },
    });

    // User Pool Client for Web
    const webClient = userPool.addClient('WebClient', {
      authFlows: {
        userPassword: true,
        userSrp: true,
        adminUserPassword: true,
      },
      oAuth: {
        flows: {
          authorizationCodeGrant: true,
        },
        scopes: [cognito.OAuthScope.EMAIL, cognito.OAuthScope.OPENID, cognito.OAuthScope.PROFILE],
        callbackUrls: ['https://stylebyzaga.com/callback', 'http://localhost:3000/callback'],
        logoutUrls: ['https://stylebyzaga.com/logout', 'http://localhost:3000/logout'],
      },
      preventUserExistenceErrors: true,
    });

    // User Pool Client for Mobile
    const mobileClient = userPool.addClient('MobileClient', {
      authFlows: {
        userPassword: true,
        userSrp: true,
      },
      oAuth: {
        flows: {
          implicitCodeGrant: true,
        },
        scopes: [cognito.OAuthScope.EMAIL, cognito.OAuthScope.OPENID, cognito.OAuthScope.PROFILE],
        callbackUrls: ['stylebyzaga://callback'],
        logoutUrls: ['stylebyzaga://logout'],
      },
      preventUserExistenceErrors: true,
    });

    // DynamoDB Tables
    const userProfilesTable = new dynamodb.Table(this, 'UserProfiles', {
      partitionKey: { name: 'userId', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      encryption: dynamodb.TableEncryption.CUSTOMER_MANAGED,
      encryptionKey: encryptionKey,
      pointInTimeRecovery: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    const productsTable = new dynamodb.Table(this, 'Products', {
      partitionKey: { name: 'productId', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'category', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      encryption: dynamodb.TableEncryption.CUSTOMER_MANAGED,
      encryptionKey: encryptionKey,
      pointInTimeRecovery: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    // Add GSIs for product queries
    productsTable.addGlobalSecondaryIndex({
      indexName: 'CategoryIndex',
      partitionKey: { name: 'category', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'price', type: dynamodb.AttributeType.NUMBER },
      projectionType: dynamodb.ProjectionType.ALL,
    });

    productsTable.addGlobalSecondaryIndex({
      indexName: 'BrandIndex',
      partitionKey: { name: 'brand', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'productId', type: dynamodb.AttributeType.STRING },
      projectionType: dynamodb.ProjectionType.ALL,
    });

    const stylistsTable = new dynamodb.Table(this, 'Stylists', {
      partitionKey: { name: 'stylistId', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      encryption: dynamodb.TableEncryption.CUSTOMER_MANAGED,
      encryptionKey: encryptionKey,
      pointInTimeRecovery: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    // Add GSIs for stylist queries
    stylistsTable.addGlobalSecondaryIndex({
      indexName: 'SpecialtyIndex',
      partitionKey: { name: 'specialty', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'rating', type: dynamodb.AttributeType.NUMBER },
      projectionType: dynamodb.ProjectionType.ALL,
    });

    stylistsTable.addGlobalSecondaryIndex({
      indexName: 'LocationIndex',
      partitionKey: { name: 'location', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'stylistId', type: dynamodb.AttributeType.STRING },
      projectionType: dynamodb.ProjectionType.ALL,
    });

    const ordersTable = new dynamodb.Table(this, 'Orders', {
      partitionKey: { name: 'orderId', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      encryption: dynamodb.TableEncryption.CUSTOMER_MANAGED,
      encryptionKey: encryptionKey,
      pointInTimeRecovery: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      stream: dynamodb.StreamViewType.NEW_AND_OLD_IMAGES,
    });

    // Add GSIs for order queries
    ordersTable.addGlobalSecondaryIndex({
      indexName: 'UserOrdersIndex',
      partitionKey: { name: 'userId', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'orderDate', type: dynamodb.AttributeType.STRING },
      projectionType: dynamodb.ProjectionType.ALL,
    });

    ordersTable.addGlobalSecondaryIndex({
      indexName: 'StylistOrdersIndex',
      partitionKey: { name: 'stylistId', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'orderDate', type: dynamodb.AttributeType.STRING },
      projectionType: dynamodb.ProjectionType.ALL,
    });

    const messagesTable = new dynamodb.Table(this, 'Messages', {
      partitionKey: { name: 'conversationId', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'timestamp', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      encryption: dynamodb.TableEncryption.CUSTOMER_MANAGED,
      encryptionKey: encryptionKey,
      pointInTimeRecovery: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      timeToLiveAttribute: 'ttl',
    });

    // Add GSI for user messages
    messagesTable.addGlobalSecondaryIndex({
      indexName: 'UserMessagesIndex',
      partitionKey: { name: 'userId', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'timestamp', type: dynamodb.AttributeType.STRING },
      projectionType: dynamodb.ProjectionType.ALL,
    });

    // Aurora PostgreSQL for relational data
    const dbCluster = new rds.DatabaseCluster(this, 'StyleByZagaDatabase', {
      engine: rds.DatabaseClusterEngine.auroraPostgres({
        version: rds.AuroraPostgresEngineVersion.VER_13_7,
      }),
      instances: 2,
      instanceProps: {
        vpc,
        vpcSubnets: {
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
        },
        instanceType: ec2.InstanceType.of(ec2.InstanceClass.R6G, ec2.InstanceSize.LARGE),
      },
      storageEncrypted: true,
      storageEncryptionKey: encryptionKey,
      backup: {
        retention: cdk.Duration.days(7),
        preferredWindow: '02:00-03:00',
      },
      deletionProtection: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    // ElastiCache Redis for caching and real-time data
    const redisSubnetGroup = new elasticache.CfnSubnetGroup(this, 'RedisSubnetGroup', {
      description: 'Subnet group for Redis',
      subnetIds: vpc.selectSubnets({
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
      }).subnetIds,
    });

    const redisSecurityGroup = new ec2.SecurityGroup(this, 'RedisSecurityGroup', {
      vpc,
      description: 'Security group for Redis cluster',
      allowAllOutbound: true,
    });

    const redisCluster = new elasticache.CfnReplicationGroup(this, 'StyleByZagaRedis', {
      replicationGroupDescription: 'Redis cluster for StyleByZaga',
      atRestEncryptionEnabled: true,
      transitEncryptionEnabled: true,
      multiAzEnabled: true,
      automaticFailoverEnabled: true,
      cacheNodeType: 'cache.r6g.large',
      engine: 'redis',
      engineVersion: '6.2',
      numNodeGroups: 1,
      replicasPerNodeGroup: 1,
      cacheSubnetGroupName: redisSubnetGroup.ref,
      securityGroupIds: [redisSecurityGroup.securityGroupId],
    });

    // OpenSearch for product search
    const openSearchDomain = new opensearch.Domain(this, 'StyleByZagaSearch', {
      version: opensearch.EngineVersion.OPENSEARCH_1_3,
      capacity: {
        dataNodes: 3,
        dataNodeInstanceType: 'r6g.large.search',
      },
      ebs: {
        volumeSize: 100,
        volumeType: ec2.EbsDeviceVolumeType.GP3,
      },
      zoneAwareness: {
        enabled: true,
      },
      encryption: {
        atRest: {
          enabled: true,
        },
        transit: {
          enabled: true,
        },
      },
      nodeToNodeEncryption: true,
      enforceHttps: true,
      fineGrainedAccessControl: {
        masterUserName: 'admin',
      },
      vpc,
      vpcSubnets: [{ subnetType: ec2.SubnetType.PRIVATE_ISOLATED }],
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    // AppSync GraphQL API
    const api = new appsync.GraphqlApi(this, 'StyleByZagaAPI', {
      name: 'StyleByZagaAPI',
      schema: appsync.SchemaFile.fromAsset('graphql/schema.graphql'),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.USER_POOL,
          userPoolConfig: {
            userPool,
          },
        },
        additionalAuthorizationModes: [
          {
            authorizationType: appsync.AuthorizationType.API_KEY,
            apiKeyConfig: {
              name: 'StyleByZagaAPIKey',
              description: 'API Key for public data access',
              expires: cdk.Expiration.after(cdk.Duration.days(365)),
            },
          },
        ],
      },
      logConfig: {
        fieldLogLevel: appsync.FieldLogLevel.ERROR,
      },
      xrayEnabled: true,
    });

    // Lambda Functions for API handlers
    const userServiceLambda = new lambda.Function(this, 'UserServiceFunction', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda/user-service'),
      environment: {
        USER_PROFILES_TABLE: userProfilesTable.tableName,
      },
      vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
      },
      timeout: cdk.Duration.seconds(30),
      memorySize: 512,
    });

    const productServiceLambda = new lambda.Function(this, 'ProductServiceFunction', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda/product-service'),
      environment: {
        PRODUCTS_TABLE: productsTable.tableName,
        ASSETS_BUCKET: assetsBucket.bucketName,
        OPENSEARCH_DOMAIN: openSearchDomain.domainEndpoint,
      },
      vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
      },
      timeout: cdk.Duration.seconds(30),
      memorySize: 512,
    });

    const stylistServiceLambda = new lambda.Function(this, 'StylistServiceFunction', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda/stylist-service'),
      environment: {
        STYLISTS_TABLE: stylistsTable.tableName,
        ASSETS_BUCKET: assetsBucket.bucketName,
      },
      vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
      },
      timeout: cdk.Duration.seconds(30),
      memorySize: 512,
    });

    const orderServiceLambda = new lambda.Function(this, 'OrderServiceFunction', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda/order-service'),
      environment: {
        ORDERS_TABLE: ordersTable.tableName,
        STRIPE_SECRET_KEY: '{{resolve:secretsmanager:StyleByZagaSecrets:SecretString:StripeSecretKey}}',
      },
      vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
      },
      timeout: cdk.Duration.seconds(30),
      memorySize: 512,
    });

    const messagingServiceLambda = new lambda.Function(this, 'MessagingServiceFunction', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda/messaging-service'),
      environment: {
        MESSAGES_TABLE: messagesTable.tableName,
      },
      vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
      },
      timeout: cdk.Duration.seconds(30),
      memorySize: 512,
    });

    // Grant permissions to Lambda functions
    userProfilesTable.grantReadWriteData(userServiceLambda);
    productsTable.grantReadWriteData(productServiceLambda);
    stylistsTable.grantReadWriteData(stylistServiceLambda);
    ordersTable.grantReadWriteData(orderServiceLambda);
    messagesTable.grantReadWriteData(messagingServiceLambda);
    assetsBucket.grantReadWrite(productServiceLambda);
    assetsBucket.grantReadWrite(stylistServiceLambda);

    // AppSync Data Sources
    const userServiceDS = api.addLambdaDataSource('UserServiceDataSource', userServiceLambda);
    const productServiceDS = api.addLambdaDataSource('ProductServiceDataSource', productServiceLambda);
    const stylistServiceDS = api.addLambdaDataSource('StylistServiceDataSource', stylistServiceLambda);
    const orderServiceDS = api.addLambdaDataSource('OrderServiceDataSource', orderServiceLambda);
    const messagingServiceDS = api.addLambdaDataSource('MessagingServiceDataSource', messagingServiceLambda);

    // AppSync Resolvers
    userServiceDS.createResolver({
      typeName: 'Query',
      fieldName: 'getUserProfile',
    });

    userServiceDS.createResolver({
      typeName: 'Mutation',
      fieldName: 'updateUserProfile',
    });

    productServiceDS.createResolver({
      typeName: 'Query',
      fieldName: 'getProduct',
    });

    productServiceDS.createResolver({
      typeName: 'Query',
      fieldName: 'listProducts',
    });

    productServiceDS.createResolver({
      typeName: 'Query',
      fieldName: 'searchProducts',
    });

    stylistServiceDS.createResolver({
      typeName: 'Query',
      fieldName: 'getStylist',
    });

    stylistServiceDS.createResolver({
      typeName: 'Query',
      fieldName: 'listStylists',
    });

    stylistServiceDS.createResolver({
      typeName: 'Query',
      fieldName: 'matchStylists',
    });

    orderServiceDS.createResolver({
      typeName: 'Mutation',
      fieldName: 'createOrder',
    });

    orderServiceDS.createResolver({
      typeName: 'Query',
      fieldName: 'getOrder',
    });

    orderServiceDS.createResolver({
      typeName: 'Query',
      fieldName: 'listUserOrders',
    });

    messagingServiceDS.createResolver({
      typeName: 'Mutation',
      fieldName: 'sendMessage',
    });

    messagingServiceDS.createResolver({
      typeName: 'Query',
      fieldName: 'listConversations',
    });

    messagingServiceDS.createResolver({
      typeName: 'Query',
      fieldName: 'getMessages',
    });

    messagingServiceDS.createResolver({
      typeName: 'Subscription',
      fieldName: 'onNewMessage',
    });

    // REST API for admin and integration endpoints
    const restApi = new apigw.RestApi(this, 'StyleByZagaRestAPI', {
      description: 'StyleByZaga REST API for admin functions and integrations',
      deployOptions: {
        stageName: 'prod',
        loggingLevel: apigw.MethodLoggingLevel.INFO,
        dataTraceEnabled: true,
      },
      endpointConfiguration: {
        types: [apigw.EndpointType.REGIONAL],
      },
    });

    // Admin API endpoints
    const adminResource = restApi.root.addResource('admin');
    const productsAdminResource = adminResource.addResource('products');
    const stylistsAdminResource = adminResource.addResource('stylists');
    const ordersAdminResource = adminResource.addResource('orders');

    // Integration with Lambda functions
    productsAdminResource.addMethod('GET', new apigw.LambdaIntegration(productServiceLambda));
    productsAdminResource.addMethod('POST', new apigw.LambdaIntegration(productServiceLambda));
    productsAdminResource.addResource('{productId}').addMethod('PUT', new apigw.LambdaIntegration(productServiceLambda));
    
    stylistsAdminResource.addMethod('GET', new apigw.LambdaIntegration(stylistServiceLambda));
    stylistsAdminResource.addMethod('POST', new apigw.LambdaIntegration(stylistServiceLambda));
    stylistsAdminResource.addResource('{stylistId}').addMethod('PUT', new apigw.LambdaIntegration(stylistServiceLambda));
    
    ordersAdminResource.addMethod('GET', new apigw.LambdaIntegration(orderServiceLambda));
    ordersAdminResource.addResource('{orderId}').addMethod('GET', new apigw.LambdaIntegration(orderServiceLambda));

    // SNS Topics for notifications
    const orderNotificationTopic = new sns.Topic(this, 'OrderNotifications', {
      displayName: 'StyleByZaga Order Notifications',
    });

    const stylistMatchTopic = new sns.Topic(this, 'StylistMatchNotifications', {
      displayName: 'StyleByZaga Stylist Match Notifications',
    });

    // Step Functions for order processing workflow
    const createPaymentIntent = new tasks.LambdaInvoke(this, 'CreatePaymentIntent', {
      lambdaFunction: new lambda.Function(this, 'CreatePaymentIntentFunction', {
        runtime: lambda.Runtime.NODEJS_16_X,
        handler: 'index.handler',
        code: lambda.Code.fromAsset('lambda/payment-service/create-payment-intent'),
        environment: {
          STRIPE_SECRET_KEY: '{{resolve:secretsmanager:StyleByZagaSecrets:SecretString:StripeSecretKey}}',
        },
      }),
      outputPath: '$.Payload',
    });

    const processOrder = new tasks.LambdaInvoke(this, 'ProcessOrder', {
      lambdaFunction: new lambda.Function(this, 'ProcessOrderFunction', {
        runtime: lambda.Runtime.NODEJS_16_X,
        handler: 'index.handler',
        code: lambda.Code.fromAsset('lambda/order-service/process-order'),
        environment: {
          ORDERS_TABLE: ordersTable.tableName,
          ORDER_NOTIFICATION_TOPIC: orderNotificationTopic.topicArn,
        },
      }),
      outputPath: '$.Payload',
    });

    const notifyStylist = new tasks.LambdaInvoke(this, 'NotifyStylist', {
      lambdaFunction: new lambda.Function(this, 'NotifyStylistFunction', {
        runtime: lambda.Runtime.NODEJS_16_X,
        handler: 'index.handler',
        code: lambda.Code.fromAsset('lambda/notification-service/notify-stylist'),
        environment: {
          STYLIST_MATCH_TOPIC: stylistMatchTopic.topicArn,
        },
      }),
      outputPath: '$.Payload',
    });

    const orderProcessingDefinition = createPaymentIntent
      .next(processOrder)
      .next(notifyStylist);

    const orderProcessingStateMachine = new stepfunctions.StateMachine(this, 'OrderProcessingWorkflow', {
      definition: orderProcessingDefinition,
      timeout: cdk.Duration.minutes(5),
      tracingEnabled: true,
    });

    // WAF for API protection
    const apiWaf = new waf.CfnWebACL(this, 'StyleByZagaWAF', {
      defaultAction: { allow: {} },
      scope: 'REGIONAL',
      visibilityConfig: {
        cloudWatchMetricsEnabled: true,
        metricName: 'StyleByZagaWAF',
        sampledRequestsEnabled: true,
      },
      rules: [
        {
          name: 'RateLimitRule',
          priority: 0,
          action: { block: {} },
          visibilityConfig: {
            cloudWatchMetricsEnabled: true,
            metricName: 'RateLimitRule',
            sampledRequestsEnabled: true,
          },
          statement: {
            rateBasedStatement: {
              limit: 1000,
              aggregateKeyType: 'IP',
            },
          },
        },
        {
          name: 'SQLiRule',
          priority: 1,
          overrideAction: { none: {} },
          visibilityConfig: {
            cloudWatchMetricsEnabled: true,
            metricName: 'SQLiRule',
            sampledRequestsEnabled: true,
          },
          statement: {
            managedRuleGroupStatement: {
              vendorName: 'AWS',
              name: 'AWSManagedRulesSQLiRuleSet',
            },
          },
        },
      ],
    });

    // CloudWatch Dashboard
    const dashboard = new cloudwatch.Dashboard(this, 'StyleByZagaDashboard', {
      dashboardName: 'StyleByZaga-Metrics',
    });

    dashboard.addWidgets(
      new cloudwatch.GraphWidget({
        title: 'API Requests',
        left: [api.metricAllRequests()],
      }),
      new cloudwatch.GraphWidget({
        title: 'API Latency',
        left: [api.metricAllLatency()],
      }),
      new cloudwatch.GraphWidget({
        title: 'API Errors',
        left: [api.
