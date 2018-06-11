import * as Interface from "./Interfaces";
import { Base } from "../Base";
/**
  JSON Web Key
*/
export declare class Model_jwk extends Base implements Interface.Ijwk {
    /**
      JSON Web Key
    */
    constructor(obj?: any);
    _class: string;
    /**
The "kty" (key type) member identifies the cryptographic algorithm    family used with the key, such as "RSA" or "EC".
*/
    "kty"?: string;
    /**
The "use" (public key use) member identifies the intended use of the    public key.
*/
    "use"?: string;
    /**
The "key_ops" (key operations) member identifies the operation(s)    that the key is intended to be used for.
*/
    "key_ops"?: string[];
    /**
The "alg" (algorithm) member identifies the algorithm intended for    use with the key.
*/
    "alg"?: string;
    /**
The "kid" (key ID) member is used to match a specific key.
*/
    "kid"?: string;
    /**
The "x5u" (X.509 URL) member is a URI [RFC3986] that refers to a    resource for an X.509 public key certificate or certificate chain.
*/
    "x5u"?: string;
    /**
The "x5c" (X.509 Certificate Chain) member contains a chain of one or    more PKIX certificates
*/
    "x5c"?: string[];
    /**
  The "x5t" (X.509 Certificate SHA-1 Thumbprint) member is a base64url    encoded SHA-1 thumbprint (a.k.a. digest) of the DER encoding of anX.509 certificate.
*/
    "x5t"?: string;
    /**
The "x5t#S256" (X.509 Certificate SHA-256 Thumbprint) member is a    base64url encoded SHA-256 thumbprint (a.k.a. digest) of the DER    encoding of an X.509 certificate
*/
    "x5t#S256"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_jwk>;
}
