import "@azure-tools/typespec-client-generator-core";
import "./main.tsp";

using Azure.ClientGenerator.Core;
using Microsoft.Cache;

@@clientName(Microsoft.Cache,
  "RedisEnterpriseManagementClient",
  "javascript, python"
);
@@clientName(PrivateEndpointConnection,
  "PrivateEndpointConnectionRedisenterpriseResource",
  "python"
);
