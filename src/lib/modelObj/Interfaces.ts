  import {IBase } from "@hfdev/utils" ;
  export interface I{

  }
  
    /**
    interface de la class boolean 
    description ce champ représente les booléains
   */
    export interface Iboolean extends   Ifield{
        
              /**
               *valeur par defaut 
               */
              
               "default"?:boolean;
              
       
   }

    /**
    interface de la class number 
    description ce champ représente les valeurs numériques
   */
    export interface Inumber extends   Ifield{
        
              /**
               *valeur par defaut 
               */
              
               "default"?:number;
              
       
              /**
               *valeur minimum acceptée 
               */
              
               "min"?:number;
              
       
              /**
               *valeur maximum acceptée 
               */
              
               "max"?:number;
              
       
              /**
               *le pas d'incrément 
               */
              
               "step"?:number;
              
       
   }

    /**
    interface de la class date 
    description ce champ représente les dates
   */
    export interface Idate extends   Ifield{
        
              /**
               *valeur par défaut 
               */
              
               "default"?:Date;
              
       
              /**
               *valeur minimum accepté 
               */
              
               "min"?:Date;
              
       
              /**
               *valeur maximum accepté 
               */
              
               "max"?:Date;
              
       
   }

    /**
    interface de la class modelid 
    description modelid
   */
    export interface Imodelid extends   Ifield{
        
              /**
               *ref 
               */
              
               "ref"?:string;
              
       
   }

    /**
    interface de la class string 
    description string est un type de base qui permet de représenter les champ de type string
   */
    export interface Istring extends   Ifield{
        
              /**
               *valeur par defaut 
               */
              
               "default"?:string;
              
       
              /**
               *convertie la donnée en minuscule 
               */
              
               "lowercase"?:boolean;
              
       
              /**
               *convertie la donnée en majuscule 
               */
              
               "uppercase"?:boolean;
              
       
              /**
               *élimine les espaces au début et a la fin de la valeur 
               */
              
               "trim"?:boolean;
              
       
              /**
               *ne pas utiliser pour l'instant ce doit être une expression regulière 
               */
              
               "match"?:string;
              
       
              /**
               *liste des valeur possible du champ 
               */
              
               "enum"?:string[];
              
       
   }

    /**
    interface de la class field 
    description ce champ est le champ représente les champs de la base. Il est abstrait, vous devez utiliser ces enfants
   */
    export interface Ifield extends  IBase {
        
              /**
               *représente le nom du champ 
               */
              
               "name":string;
              
       
              /**
               *c'est la description du champ. il permet de générer l'aide ou la documentation 
               */
              
               "description":string;
              
       
              /**
               *permet d'indiquer que le champ est un tableau 
               */
              
               "isArrayOf"?:boolean;
              
       
              /**
               *si le champ est obligatoire 
               */
              
               "required"?:boolean;
              
       
              /**
               *indique que la valeur du champ doit être unique 
               */
              
               "unique"?:boolean;
              
       
              /**
               *????? je suis plus sure 
               */
              
               "index"?:boolean;
              
       
   }

    /**
    interface de la class subdoc 
    description ce champ permet d'insérer un document dans un autre
   */
    export interface Isubdoc extends   Ifield{
        
              /**
               *c'est la référence au schéma du ce sous objet 
               */
              
               "protoSchemaId"?:string;
              
       
   }

    /**
    interface de la class protoschema 
    description protoschema est un méta modéle. il permet de créer les autres modèle de la base
   */
    export interface Iprotoschema extends  IBase {
        
              /**
               *le nom du champ 
               */
              
               "name":string;
              
       
              /**
               *la description de ce que représente le modéle 
               */
              
               "description":string;
              
       
              /**
               *tag indiquant que l'objet est abstrait, seule ces enfants doivent être utilisé comme donnée 
               */
              
               "isAbstract"?:boolean;
              
       
              /**
               *si il est activé le schéma ne crée pas de collection  
               */
              
               "isSchema"?:boolean;
              
       
              /**
               *permet d'hériter du schema parentMadel 
               */
              
               "parentModel"?:string;
              
       
              /**
               *liste des champs du documents 
               */
              
              "fields"?:Ifield[];
              
       
   }

    /**
    interface de la class htmltexte 
    description champ pour le html
   */
    export interface Ihtmltexte extends   Istring{
        
   }

    /**
    interface de la class jwk 
    description JSON Web Key 
   */
    export interface Ijwk extends  IBase {
        
              /**
               *The "kty" (key type) member identifies the cryptographic algorithm    family used with the key, such as "RSA" or "EC". 
               */
              
               "kty"?:string;
              
       
              /**
               *The "use" (public key use) member identifies the intended use of the    public key.  
               */
              
               "use"?:string;
              
       
              /**
               *The "key_ops" (key operations) member identifies the operation(s)    that the key is intended to be used for. 
               */
              
               "key_ops"?:string[];
              
       
              /**
               *The "alg" (algorithm) member identifies the algorithm intended for    use with the key.   
               */
              
               "alg"?:string;
              
       
              /**
               *The "kid" (key ID) member is used to match a specific key.  
               */
              
               "kid"?:string;
              
       
              /**
               *The "x5u" (X.509 URL) member is a URI [RFC3986] that refers to a    resource for an X.509 public key certificate or certificate chain. 
               */
              
               "x5u"?:string;
              
       
              /**
               *The "x5c" (X.509 Certificate Chain) member contains a chain of one or    more PKIX certificates 
               */
              
               "x5c"?:string[];
              
       
              /**
               *    The "x5t" (X.509 Certificate SHA-1 Thumbprint) member is a base64url    encoded SHA-1 thumbprint (a.k.a. digest) of the DER encoding of anX.509 certificate. 
               */
              
               "x5t"?:string;
              
       
              /**
               *The "x5t#S256" (X.509 Certificate SHA-256 Thumbprint) member is a    base64url encoded SHA-256 thumbprint (a.k.a. digest) of the DER    encoding of an X.509 certificate 
               */
              
               "x5t#S256"?:string;
              
       
   }

    /**
    interface de la class texte 
    description champ pour texte long
   */
    export interface Itexte extends   Istring{
        
   }

    /**
    interface de la class jwks 
    description JSON Web Key Set (JWK Set)
   */
    export interface Ijwks extends  IBase {
        
              /**
               *The value of the "keys" member is an array of JWK values. 
               */
              
              "keys"?:Ijwk[];
              
       
   }

    /**
    interface de la class passport_strategie_facebook 
    description Facebook authentication strategy for Passport  (https://github.com/jaredhanson/passport-facebook)
   */
    export interface Ipassport_strategie_facebook extends   Ipassport_strategie{
        
              /**
               *lib 
               */
              
               "lib":string;
              
       
              /**
               *la class de stratégie à appeler dans la lib 
               */
              
               "strategieName":string;
              
       
              /**
               *FACEBOOK_APP_ID 
               */
              
               "clientID":string;
              
       
              /**
               *FACEBOOK_APP_SECRET 
               */
              
               "clientSecret":string;
              
       
              /**
               *url de callback 
               */
              
               "callbackURL":string;
              
       
              /**
               *scope 
               */
              
               "scope":string[];
              
       
              /**
               *The Facebook profile contains a lot of information about a user. By default, not all the fields in a profile are returned. The fields needed by an application can be indicated by setting the profileFields option. 
               */
              
               "profileFields"?:string[];
              
       
              /**
               *enableProof 
               */
              
               "enableProof"?:boolean;
              
       
   }

    /**
    interface de la class passport_strategie_linkedin 
    description Passport strategy for authenticating with LinkedIn using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-linkedin)
   */
    export interface Ipassport_strategie_linkedin extends   Ipassport_strategie{
        
              /**
               *lib 
               */
              
               "lib":string;
              
       
              /**
               *la class de stratégie à appeler dans la lib 
               */
              
               "strategieName":string;
              
       
              /**
               *LINKEDIN_API_KEY 
               */
              
               "consumerKey":string;
              
       
              /**
               *LINKEDIN_SECRET_KEY 
               */
              
               "consumerSecret":string;
              
       
              /**
               *callbackURL 
               */
              
               "callbackURL":string;
              
       
              /**
               *scope 
               */
              
               "scope":string[];
              
       
              /**
               *The LinkedIn profile is very rich, and may contain a lot of information. The strategy can be configured with a profileFields parameter which specifies a list of fields your application needs. For example, to fetch the user's ID, name, email address, and headline, configure strategy like this. 
               */
              
               "profileFields"?:string[];
              
       
   }

    /**
    interface de la class passport_strategie_google 
    description Passport strategies for authenticating with Google using OAuth 1.0a and OAuth 2.0 (https://github.com/jaredhanson/passport-google-oauth)
   */
    export interface Ipassport_strategie_google extends   Ipassport_strategie{
        
              /**
               *lib 
               */
              
               "lib":string;
              
       
              /**
               *la class de stratégie à appeler dans la lib 
               */
              
               "strategieName":string;
              
       
              /**
               *GOOGLE_CLIENT_ID 
               */
              
               "clientID":string;
              
       
              /**
               *GOOGLE_CLIENT_SECRET 
               */
              
               "clientSecret":string;
              
       
              /**
               *url de callback 
               */
              
               "callbackURL":string;
              
       
              /**
               *scope 
               */
              
               "scope":string[];
              
       
   }

    /**
    interface de la class passport_strategie 
    description configuration d'une stratégie passport à déployer sur le sso
   */
    export interface Ipassport_strategie extends  IBase {
        
              /**
               *nom de la route 
               */
              
               "name":string;
              
       
              /**
               *création automatique d'un compte si il n’existe pas 
               */
              
               "autoCreate"?:boolean;
              
       
              /**
               *connexion automatique au compte contenant le même email  
               */
              
               "autoLoginWMail"?:boolean;
              
       
   }

    /**
    interface de la class passport_strategie_twitter 
    description Passport strategy for authenticating with Twitter using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-twitter)
   */
    export interface Ipassport_strategie_twitter extends   Ipassport_strategie{
        
              /**
               *lib 
               */
              
               "lib":string;
              
       
              /**
               *la class de stratégie à appeler dans la lib 
               */
              
               "strategieName":string;
              
       
              /**
               *TWITTER_CONSUMER_KEY 
               */
              
               "consumerKey":string;
              
       
              /**
               *TWITTER_CONSUMER_SECRET 
               */
              
               "consumerSecret":string;
              
       
              /**
               *url de callback 
               */
              
               "callbackURL":string;
              
       
   }

    /**
    interface de la class passport_strategie_instagram 
    description Passport strategy for authenticating with Instagram using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-instagram)
   */
    export interface Ipassport_strategie_instagram extends   Ipassport_strategie{
        
              /**
               *lib 
               */
              
               "lib":string;
              
       
              /**
               *la class de stratégie à appeler dans la lib 
               */
              
               "strategieName":string;
              
       
              /**
               *INSTAGRAM_CLIENT_ID 
               */
              
               "clientID":string;
              
       
              /**
               *INSTAGRAM_CLIENT_SECRET 
               */
              
               "clientSecret":string;
              
       
              /**
               *url de callback 
               */
              
               "callbackURL":string;
              
       
   }

    /**
    interface de la class passport_strategie_windowslive 
    description Passport strategy for authenticating with Microsoft accounts (aka Windows Live) using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-windowslive)
   */
    export interface Ipassport_strategie_windowslive extends   Ipassport_strategie{
        
              /**
               *lib 
               */
              
               "lib":string;
              
       
              /**
               *la class de stratégie à appeler dans la lib 
               */
              
               "strategieName":string;
              
       
              /**
               *WINDOWS_LIVE_CLIENT_ID 
               */
              
               "clientID":string;
              
       
              /**
               *WINDOWS_LIVE_CLIENT_SECRET 
               */
              
               "clientSecret":string;
              
       
              /**
               *url de callback 
               */
              
               "callbackURL":string;
              
       
              /**
               *scope 
               */
              
               "scope"?:string;
              
       
   }

    /**
    interface de la class social_data 
    description donnée des connecteur sociaux
   */
    export interface Isocial_data extends  IBase {
        
   }

    /**
    interface de la class passport_strategie_dropbox 
    description Passport strategy for authenticating with Dropbox using the OAuth 2.0 API. (https://github.com/florianheinemann/passport-dropbox-oauth2)
   */
    export interface Ipassport_strategie_dropbox extends   Ipassport_strategie{
        
              /**
               *lib 
               */
              
               "lib":string;
              
       
              /**
               *la class de stratégie à appeler dans la lib 
               */
              
               "strategieName":string;
              
       
              /**
               *DROPBOX_CLIENT_ID 
               */
              
               "clientID":string;
              
       
              /**
               *DROPBOX_CLIENT_SECRET 
               */
              
               "clientSecret":string;
              
       
              /**
               *url de callback 
               */
              
               "callbackURL":string;
              
       
              /**
               *apiVersion 
               */
              
               "apiVersion"?:number;
              
       
   }

    /**
    interface de la class password 
    description password
   */
    export interface Ipassword extends   Istring{
        
   }

    /**
    interface de la class oidc_clientUserManagment 
    description configuration du gestionnaire d'utilisateur
   */
    export interface Ioidc_clientUserManagment extends  IBase {
        
              /**
               *url du service d'enregistrement 
               */
              
               "sign_in_uri"?:string;
              
       
              /**
               *url du service de récupération de mot de passe 
               */
              
               "password_recovery_uri":string;
              
       
   }

    /**
    interface de la class oidc_account 
    description compte de l'utilisateur
   */
    export interface Ioidc_account extends  IBase {
        
              /**
               *id du compte 
               */
              
               "account_id":string;
              
       
              /**
               *birthdate 
               */
              
               "birthdate"?:Date;
              
       
              /**
               *email 
               */
              
               "email":string;
              
       
              /**
               *email_verified 
               */
              
               "email_verified"?:boolean;
              
       
              /**
               *family_name 
               */
              
               "family_name"?:string;
              
       
              /**
               *gender 
               */
              
               "gender"?:string;
              
       
              /**
               *given_name 
               */
              
               "given_name"?:string;
              
       
              /**
               *locale 
               */
              
               "locale"?:string;
              
       
              /**
               *middle_name 
               */
              
               "middle_name"?:string;
              
       
              /**
               *name 
               */
              
               "name"?:string;
              
       
              /**
               *nickname 
               */
              
               "nickname"?:string;
              
       
              /**
               *phone_number 
               */
              
               "phone_number"?:string;
              
       
              /**
               *phone_number_verified 
               */
              
               "phone_number_verified"?:boolean;
              
       
              /**
               *l’empreinte du mot de passe 
               */
              
               "password"?:string;
              
       
              /**
               *url de l'avatar 
               */
              
               "picture"?:string;
              
       
              /**
               *profile sociaux 
               */
              
              "connector"?:Isocial_data[];
              
       
              /**
               *clef secrète pour reseter le password 
               */
              
               "resetPasswordKey"?:string;
              
       
              /**
               *fin de validité de la clef de reset du password 
               */
              
               "resetPasswordEndDate"?:string;
              
       
              /**
               *call back de la séquece de reset du password 
               */
              
               "resetPasswordReturn"?:string;
              
       
   }

    /**
    interface de la class object 
    description ce champ représente les objets
   */
    export interface Iobject extends   Ifield{
        
   }

    /**
    interface de la class objectid 
    description c'est un champ de base qui permet de référence un document d'une autre base.
   */
    export interface Iobjectid extends   Ifield{
        
              /**
               *représente le nom du champ 
               */
              
               "name":string;
              
       
              /**
               *c'est la description du champ. il permet de générer l'aide ou la documentation 
               */
              
               "description":string;
              
       
              /**
               *permet d'indiquer que le champ est un tableau 
               */
              
               "isArrayOf"?:boolean;
              
       
              /**
               *si le champ est obligatoire 
               */
              
               "required"?:boolean;
              
       
              /**
               *indique que la valeur du champ doit être unique 
               */
              
               "unique"?:boolean;
              
       
              /**
               *????? je suis plus sure 
               */
              
               "index"?:boolean;
              
       
              /**
               *c'est la référence a la collection dans lequelle  sont les document a référencer 
               */
              
               "ref":string;
              
       
   }

    /**
    interface de la class passport_strategie_local 
    description Passport strategies for authenticating with local call
   */
    export interface Ipassport_strategie_local extends   Ipassport_strategie{
        
              /**
               *lib 
               */
              
               "lib":string;
              
       
              /**
               *la class de stratégie à appeler dans la lib 
               */
              
               "strategieName":string;
              
       
              /**
               *nom de la bibliothèque contenant le callback 
               */
              
               "CBLib":string;
              
       
              /**
               *configuration du callback 
               */
              
               "cbConf"?:any;              
              
       
              /**
               *usernameField 
               */
              
               "usernameField":string;
              
       
              /**
               *passwordField 
               */
              
               "passwordField":string;
              
       
              /**
               *session 
               */
              
               "session"?:boolean;
              
       
   }

    /**
    interface de la class oidc_Client 
    description description d'un client openId (c'est une application)
   */
    export interface Ioidc_Client extends  IBase {
        
              /**
               *client_id 
               */
              
               "client_id":string;
              
       
              /**
               *client_secret est la clef secrète qui permet de sécuriser l’accès depuis un serveur. 
               */
              
               "client_secret":string;
              
       
              /**
               *grant_types 
               */
              
               "grant_types":string[];
              
       
              /**
               *redirect_uris représente la liste des url de redirection autorisé 
               */
              
               "redirect_uris":string[];
              
       
              /**
               *List de valeur response_type (OAuth 2.0) que le Client déclare et qu'il se restreint à utiliser. 
               */
              
               "response_types"?:string[];
              
       
              /**
               *Type de l'application (Si omit elle est définie comme 'web' ) 
               */
              
               "application_type"?:string;
              
       
              /**
               *List d'E-mails des responsable de l'application 
               */
              
               "contacts"?:string[];
              
       
              /**
               *Nom du Client à présenter à l' End-User 
               */
              
               "client_name"?:string;
              
       
              /**
               *URl qui référence le Logo de l'application. 
               */
              
               "logo_uri"?:string;
              
       
              /**
               *URL de la page Home du Client. 
               */
              
               "client_uri"?:string;
              
       
              /**
               *Url que le Client fourni à l'utilisateur (End-User) pour définir l'étendu de l'utilisation de l'information recueilli. 
               */
              
               "policy_uri"?:string;
              
       
              /**
               *URL que le Client fourni à l'End-User pour lire les termes du service. 
               */
              
               "tos_uri"?:string;
              
       
              /**
               *URL pour le document JWK (JSON Web Key Set) du Client 
               */
              
               "jwks_uri"?:string;
              
       
              /**
               *Client's JSON Web Key Set [JWK] document, passed by value. 
               */
              
              "jwks"?:Ijwks;
              
       
              /**
               *URl utilisant le schéma https à utilisé pour le calcul d'Identifiant Pseudo-anonyme par l'OP. 
               */
              
               "sector_identifier_uri"?:string;
              
       
              /**
               *subject_type demandé comme réponse par le Client. 
               */
              
               "subject_type"?:string;
              
       
              /**
               *JWA algorithm REQUIS pour la signature de l'ID Token émit par le Client ('none' NE DOIT PAS être utilisé) . 
               */
              
               "id_token_signed_response_alg"?:string;
              
       
              /**
               *JWA algorithm REQUIS pour l'encryption de l'ID Token émit par le Client. 
               */
              
               "id_token_encrypted_response_alg"?:string;
              
       
              /**
               *JWE enc algorithme [JWA] REQUIS pour le cryptage de l'ID Token émit pars le Client. 
               */
              
               "id_token_encrypted_response_enc"?:string;
              
       
              /**
               *WS alg algorithme [JWA] REQUIS pour la  réponse de signature UserInfo. 
               */
              
               "userinfo_signed_response_alg"?:string;
              
       
              /**
               *[JWE] alg algorithm [JWA] REQUIRED for encrypting UserInfo Responses. 
               */
              
               "userinfo_encrypted_response_alg"?:string;
              
       
              /**
               *JWE enc algorithm [JWA] REQUIRED for encrypting UserInfo Responses. 
               */
              
               "userinfo_encrypted_response_enc"?:string;
              
       
              /**
               *[JWS] alg algorithm [JWA] that MUST be used for signing Request Objects sent to the OP. 
               */
              
               "request_object_signing_alg"?:string;
              
       
              /**
               *[JWE] alg algorithm [JWA] the RP is declaring that it may use for encrypting Request Objects sent to the OP. 
               */
              
               "request_object_encryption_alg"?:string;
              
       
              /**
               *JWE enc algorithm [JWA] the RP is declaring that it may use for encrypting Request Objects sent to the OP. 
               */
              
               "request_object_encryption_enc"?:string;
              
       
              /**
               *Requested Client Authentication method for the Token Endpoint.  
               */
              
               "token_endpoint_auth_method"?:string;
              
       
              /**
               *[JWS] alg algorithm [JWA] that MUST be used for signing the JWT [JWT] used to authenticate the Client at the Token Endpoint for the private_key_jwt and client_secret_jwt authentication methods. 
               */
              
               "token_endpoint_auth_signing_alg"?:string;
              
       
              /**
               * Default Maximum Authentication Age. (in seconds) 
               */
              
               "default_max_age"?:number;
              
       
              /**
               *Boolean value specifying whether the auth_time Claim in the ID Token is REQUIRED.  
               */
              
               "require_auth_time"?:boolean;
              
       
              /**
               *Default requested Authentication Context Class Reference values.  
               */
              
               "default_acr_values"?:string[];
              
       
              /**
               *URI using the https scheme that a third party can use to initiate a login by the RP 
               */
              
               "initiate_login_uri"?:string;
              
       
              /**
               *Array of request_uri values that are pre-registered by the RP for use at the OP.  
               */
              
               "request_uris"?:string[];
              
       
              /**
               *list des url de redirection pour le logout 
               */
              
               "post_logout_redirect_uris"?:string[];
              
       
              /**
               *configuration des connecteurs sociaux 
               */
              
              "passportConfig"?:Ipassport_strategie[];
              
       
              /**
               * paramètre de gestion des utilisateurs 
               */
              
              "userManagment"?:Ioidc_clientUserManagment;
              
       
              /**
               *redirige automatiquement vers la connexion sso 
               */
              
               "redirectSso"?:boolean;
              
       
   }

    /**
    interface de la class passport_strategie_saml 
    description strategie saml pour passport (https://github.com/bergie/passport-saml)
   */
    export interface Ipassport_strategie_saml extends   Ipassport_strategie{
        
              /**
               *librairie a appeller 
               */
              
               "lib":string;
              
       
              /**
               *la class de stratégie à appeler dans la lib 
               */
              
               "strategieName":string;
              
       
              /**
               *full callbackUrl  
               */
              
               "callbackUrl":string;
              
       
              /**
               * identity provider entrypoint 
               */
              
               "entryPoint"?:string;
              
       
              /**
               *issuer string to supply to identity provider 
               */
              
               "issuer"?:string;
              
       
              /**
               *see 'security and signatures' 
               */
              
               "cert"?:string;
              
       
              /**
               *see 'security and signatures' 
               */
              
               "privateCert"?:string;
              
       
              /**
               *optional private key that will be used to attempt to decrypt any encrypted assertions that are received 
               */
              
               "decryptionPvk"?:string;
              
       
              /**
               * optionally set the signature algorithm for signing requests, valid values are 'sha1' (default), 'sha256', or 'sha512' 
               */
              
               "signatureAlgorithm"?:string;
              
       
              /**
               * dictionary of additional query params to add to all requests 
               */
              
               "additionalParams"?:string;
              
       
              /**
               *if truthy, name identifier format to request from identity provider (default: urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress) 
               */
              
               "identifierFormat"?:string;
              
       
              /**
               *Time in milliseconds of skew that is acceptable between client and server when checking OnBefore and NotOnOrAfter assertion condition validity timestamps. Setting to -1 will disable checking these conditions entirely. Default is 0 
               */
              
               "acceptedClockSkewMs"?:number;
              
       
              /**
               *optional AttributeConsumingServiceIndex attribute to add to AuthnRequest to instruct the IDP which attribute set to attach to the response (link) 
               */
              
               "attributeConsumingServiceIndex"?:string;
              
       
              /**
               *if truthy, do not request a specific auth context 
               */
              
               "disableRequestedAuthnContext"?:boolean;
              
       
              /**
               *if truthy, name identifier format to request auth context (default: urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport) 
               */
              
               "authnContext"?:string;
              
       
              /**
               *if set to true, the initial SAML request from the service provider specifies that the IdP should force re-authentication of the user, even if they possess a valid session. 
               */
              
               "forceAuthn"?:boolean;
              
       
              /**
               *if set to true, the SAML request from the service provider won't be compressed. authnRequestBinding: if set to HTTP-POST, will request authentication from IDP via HTTP POST binding, otherwise defaults to HTTP Redirect 
               */
              
               "skipRequestCompression"?:boolean;
              
       
              /**
               *if truthy, then InResponseTo will be validated from incoming SAML responses 
               */
              
               "validateInResponseTo"?:string;
              
       
              /**
               *Defines the expiration time when a Request ID generated for a SAML request will not be valid if seen in a SAML response in the InResponseTo field. Default is 8 hours. 
               */
              
               "requestIdExpirationPeriodMs"?:number;
              
       
              /**
               *if truthy, req will be passed as the first argument to the verify callback (default: false) 
               */
              
               "passReqToCallback"?:boolean;
              
       
              /**
               *base address to call with logout requests (default: entryPoint) 
               */
              
               "logoutUrl"?:string;
              
       
              /**
               *dictionary of additional query params to add to 'logout' requests 
               */
              
               "additionalLogoutParams"?:string;
              
       
              /**
               *The value with which to populate the Location attribute in the SingleLogoutService elements in the generated service provider metadata. 
               */
              
               "logoutCallbackUrl"?:string;
              
       
   }
