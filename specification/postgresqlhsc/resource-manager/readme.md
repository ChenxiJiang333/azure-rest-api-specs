# postgresqlhsc

> see https://aka.ms/autorest

This is the AutoRest configuration file for Cosmos DB for PostgreSQL.

## Getting Started

To build the SDKs for My API, simply install AutoRest via `npm` (`npm install -g autorest`) and then run:

> `autorest readme.md`

To see additional help and options, run:

> `autorest --help`

For other options on installation see [Installing AutoRest](https://aka.ms/autorest/install) on the AutoRest github page.

---

## Configuration

### Basic Information

These are the global settings for the Cosmos DB for PostgreSQL API.

``` yaml
title: Cosmos DB for PostgreSQL
openapi-type: arm
tag: package-preview-2023-03
```


### Tag: package-preview-2023-03

These settings apply only when `--tag=package-preview-2023-03` is specified on the command line.

```yaml $(tag) == 'package-preview-2023-03'
input-file:
  - Microsoft.DBforPostgreSQL/preview/2023-03-02-preview/postgresqlhsc.json
```
### Tag: package-2022-11-08

These settings apply only when `--tag=package-2022-11-08` is specified on the command line.

``` yaml $(tag) == 'package-2022-11-08'
input-file:
  - Microsoft.DBforPostgreSQL/stable/2022-11-08/postgresqlhsc.json
```

### Tag: package-2020-10-05-privatepreview

These settings apply only when `--tag=package-2020-10-05-privatepreview` is specified on the command line.

``` yaml $(tag) == 'package-2020-10-05-privatepreview'
input-file:
  - Microsoft.DBforPostgreSQL/preview/2020-10-05-privatepreview/postgresqlhsc.json
```

## Suppression

``` yaml
directive:
- suppress: PathResourceProviderNamePascalCase
  from: postgresqlhsc.json
  reason: Service provider name Microsoft.DBforPostgreSQL directly violates this rule.
- suppress: EnumInsteadOfBoolean
  from: postgresqlhsc.json
  reason: It's been used as boolean since 2019 by internal teams and also private preview customers like Azure Portal and we have no plans to use any values other than true/false.
- suppress: PutInOperationName
  where:
    - $..paths[($..operationId["Configurations_Update*"])]
  from: postgresqlhsc.json
  reason: Configurations have preset default values and customers can only update them, they can't create. So we don't need "Create" in operation id.
```

---

# Code Generation

## Swagger to SDK

This section describes what SDK should be generated by the automatic system.
This is not used by Autorest itself.

``` yaml $(swagger-to-sdk)
swagger-to-sdk:
  - repo: azure-sdk-for-python
  - repo: azure-sdk-for-java
  - repo: azure-sdk-for-go
  - repo: azure-sdk-for-js
  - repo: azure-sdk-for-node
  - repo: azure-sdk-for-ruby
    after_scripts:
      - bundle install && rake arm:regen_all_profiles['azure_mgmt_postgresqlhsc']
  - repo: azure-cli-extensions
  - repo: azure-resource-manager-schemas
  - repo: azure-powershell
```

## C#

See configuration in [readme.csharp.md](./readme.csharp.md)

## Go

See configuration in [readme.go.md](./readme.go.md)

## Python

See configuration in [readme.python.md](./readme.python.md)

## Java

See configuration in [readme.java.md](./readme.java.md)

## Ruby

See configuration in [readme.ruby.md](./readme.ruby.md)

## TypeScript

See configuration in [readme.typescript.md](./readme.typescript.md)

## CSharp

See configuration in [readme.csharp.md](./readme.csharp.md)
